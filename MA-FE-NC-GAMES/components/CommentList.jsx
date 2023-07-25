import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCommentsByReviewId } from "./api";
import { CommentCard } from "./CommentCard";
import CommentAdder from "./CommentAdder";

export function CommentList() {
	const [values, setValues] = useState({
		username: "jessjelly",
		body: "",
	});
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [commentToDelete, setCommentToDelete] = useState("");
	const { review_id } = useParams();

	useEffect(() => {
		fetchCommentsByReviewId(review_id)
			.then(({ comments }) => {
				return comments;
			})
			.then((comments) => {
				setComments(comments);
				setIsLoading(false);
			});
	}, [values, commentToDelete]);

	if (isLoading) {
		return <p className="loading">Loading Comments...</p>;
	}

	if (comments.length >= 1) {
		return (
			<section className="comments-container">
				<h3>Comments</h3>
				<CommentAdder
					review_id={review_id}
					comments={comments}
					setComments={setComments}
					values={values}
					setValues={setValues}
				/>
				{comments.map((comment) => {
					const { comment_id, body, review_id, author, votes, created_at } =
						comment;
					return (
						<CommentCard
							key={comment_id}
							comment_id={comment_id}
							review_id={review_id}
							body={body}
							author={author}
							votes={votes}
							created_at={created_at}
							values={values}
							setValues={setValues}
							setCommentToDelete={setCommentToDelete}
						/>
					);
				})}
			</section>
		);
	} else {
		return (
			<section className="comments-container">
				<h3>Comments</h3>
				<CommentAdder
					review_id={review_id}
					comments={comments}
					setComments={setComments}
					values={values}
					setValues={setValues}
				/>
				<p>No comments have been added for this review yet</p>
			</section>
		);
	}
}
