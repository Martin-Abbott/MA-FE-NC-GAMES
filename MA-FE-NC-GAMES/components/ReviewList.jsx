import { useState, useEffect } from "react";
import { fetchReviews } from "./api";
import ReviewCard from "./ReviewCard";
import { useSearchParams } from "react-router-dom";

export default function ReviewList() {
	const [reviews, setReviews] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const [params, setParams] = useSearchParams();
	const category = params.get("category");

	useEffect(() => {
		fetchReviews({ params: { category: category } })
			.then(({ reviews }) => {
				return reviews;
			})
			.then((reviews) => {
				setReviews(reviews);
				setIsLoading(false);
			});
	}, [params]);

	if (isLoading) {
		return <p className="loading">Loading Reviews...</p>;
	}

	return (
		<section className="reviews-container">
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
