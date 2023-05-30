import { useState, useEffect } from "react";
import { fetchReviews } from "./api";
import ReviewCard from "./ReviewCard";

export default function ReviewList() {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		fetchReviews()
			.then(({ reviews }) => {
				return reviews;
			})
			.then((reviews) => {
				setReviews(reviews);
			});
	}, []);

	return (
		<section className="container">
			{reviews.map((review) => {
				const { review_id, title, category, review_img_url } = review;
				return (
					<ReviewCard
						key={review_id}
						review_id={review_id}
						title={title}
						category={category}
						review_img_url={review_img_url}
					/>
				);
			})}
		</section>
	);
}
