import { useState } from "react";
import { patchReviewVotes } from "./api";

const VoteModifier = ({ votes, review_id }) => {
	const [err, setErr] = useState(null);
	const [currentVotes, setCurrentVotes] = useState(votes);

	const handleUpvoteClick = () => {
		setCurrentVotes((currentVotes) => +currentVotes + 1);
		setErr(null);
		patchReviewVotes(review_id, 1).catch((err) => {
			setCurrentVotes((currentVotes) => currentVotes - 1);
			setErr(
				`${err.response.data.msg}. Please refresh the page and try again.`
			);
		});
	};

	const handleDownvoteClick = () => {
		setCurrentVotes((currentVotes) => +currentVotes - 1);
		setErr(null);
		patchReviewVotes(review_id, -1).catch((err) => {
			setCurrentVotes((currentVotes) => currentVotes + 1);
			setErr(
				`${err.response.data.msg}. Please refresh the page and try again.`
			);
		});
	};

	return (
		<>
			Votes: {currentVotes}
			{err ? <p>{err}</p> : null}
			{"\n"}
			<button className="upvote" onClick={handleUpvoteClick}>
				👍
			</button>
			<button className="downvote" onClick={handleDownvoteClick}>
				👎
			</button>
		</>
	);
};

export default VoteModifier;
