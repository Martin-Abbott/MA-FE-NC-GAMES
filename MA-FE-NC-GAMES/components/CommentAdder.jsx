import { useState } from "react";
import { postComment } from "./api";

const CommentAdder = ({ review_id, setComments, values, setValues }) => {
	const [err, setErr] = useState(null);
	const [isDisabled, setIsDisabled] = useState(true);

	const handleInputChange = (event) => {
		setValues({
			username: "jessjelly",
			body: event.target.value,
			comment_id: 10000,
			author: "jessjelly",
			votes: 0,
			created_at: new Date().toISOString(),
		});
		if (event.target.value.length >= 1) {
			setIsDisabled(false);
		} else {
			setIsDisabled(true);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setIsDisabled(true);
		setComments((currentComments) => {
			return [values, ...currentComments];
		});
		postComment(review_id, values)
			.then((res) => {
				setValues({
					username: "jessjelly",
					body: "",
				});
				return res;
			})
			.catch((err) => {
				setErr(
					`${err.response.data.msg}. Please refresh the page and try again.`
				);
			});
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					label="comment"
					value={values.body}
					placeholder="Your comment..."
					onChange={handleInputChange}
				></input>
				<button type="submit" className="commentSubmit" disabled={isDisabled}>
					Submit
				</button>
			</form>
			{err ? <p>{err}</p> : null}
		</>
	);
};

export default CommentAdder;
