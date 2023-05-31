export const CommentCard = (props) => {
	const { comment_id, body, review_id, author, votes, created_at } = props;

	return (
		<article className="comment-card">
			<p>{body}</p>
			<ul>
				<li>Author: {author}</li>
				<li>Votes: {votes}</li>
				<li>Created at: {created_at}</li>
			</ul>
		</article>
	);
};

// export default CommentCard;
