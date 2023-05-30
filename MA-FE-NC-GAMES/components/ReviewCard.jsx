import { Link } from "react-router-dom";

const ReviewCard = (props, { setCategories }) => {
	const { review_id, title, category, review_img_url } = props;

	return (
		<article className="review-card">
			<h2>
				<Link to={`/reviews/${review_id}`} key={review_id}>
					{title}
				</Link>
			</h2>
			<img className="review-image" src={review_img_url} alt={title}></img>
			<p>
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
			</p>
		</article>
	);
};

export default ReviewCard;
