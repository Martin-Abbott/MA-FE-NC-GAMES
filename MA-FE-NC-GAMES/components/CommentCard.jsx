import { deleteComment } from "./api";

export const CommentCard = (props) => {
	const {
		comment_id,
		body,
		review_id,
		author,
		votes,
		created_at,
		values,
		setCommentToDelete,
	} = props;

	const handleClick = () => {
		deleteComment(comment_id).then(() => {
			setCommentToDelete(comment_id);
		});
	};

	return (
		<article className="comment-card">
			<p>{body}</p>
			<ul>
				<li>Author: {author}</li>
				<li>Votes: {votes}</li>
				<li>Comment date: {created_at.slice(0, 10)}</li>
				{values.username === author ? (
					<li>
						<button onClick={handleClick}>Delete</button>
					</li>
				) : null}
			</ul>
		</article>
	);
};
