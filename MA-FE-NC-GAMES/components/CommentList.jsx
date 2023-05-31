import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCommentsByReviewId } from "./api";
import { CommentCard } from "./CommentCard";

export function CommentList() {
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
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
	}, []);

	if (isLoading) {
		return <p className="loading">Loading Comments...</p>;
	}

	if (comments.length >= 1) {
		return (
			<section className="comments-container">
				<h3>Comments</h3>
				{comments.map((comment) => {
					const { comment_id, body, review_id, author, votes, created_at } =
						comment;
					return (
						<CommentCard
							key={comment_id}
							review_id={review_id}
							body={body}
							author={author}
							votes={votes}
							created_at={created_at}
						/>
					);
				})}
			</section>
		);
	} else {
		return (
			<section className="comments-container">
				<h3>Comments</h3>
				<p>No comments have been added for this review yet</p>
			</section>
		);
	}
}
