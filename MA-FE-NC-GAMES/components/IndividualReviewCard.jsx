import { Link } from "react-router-dom";
import VoteModifier from "./VoteModifier";

export const IndividualReviewCard = (props) => {
	const {
		review_id,
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
					{"\n"}
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
				<li>Review date: {created_at.slice(0, 10)}</li>
				<li>
					<VoteModifier votes={votes} review_id={review_id} />
				</li>
			</ul>
		</article>
	);
};
