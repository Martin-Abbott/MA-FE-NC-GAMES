import { Link } from "react-router-dom";

export const IndividualReviewCard = (props) => {
	const {
		title,
		category,
		designer,
		owner,
		review_body,
		review_img_url,
		created_at,
		votes,
	} = props;

	return (
		<article className="individual-review-card">
			<h2>{title}</h2>
			<img
				className="individual-review-image"
				src={review_img_url}
				alt={title}
			></img>
			<p>{review_body}</p>
			<ul>
				<li>
					Category:
					<Link
						to={`/reviews?category=${category}`}
						onClick={() => {
							setCategories(category);
						}}
						key={category}
					>
						{category}
					</Link>
				</li>
				<li>Designer: {designer}</li>
				<li>Owner: {owner}</li>
				<li>Review date: {created_at}</li>
				<li>Votes: {votes}</li>
			</ul>
		</article>
	);
};

// export default IndividualReviewCard;
