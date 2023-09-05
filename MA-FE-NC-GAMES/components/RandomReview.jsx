import { useState, useEffect } from "react";
import { fetchRandomReview } from "./api";
import ReviewCard from "./ReviewCard";

export default function ReviewList() {
	const [randomReview, setRandomReview] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchRandomReview().then((review) => {
			setRandomReview([review]);
			setIsLoading(false);
		});
	}, []);

	if (isLoading) {
		return <p className="loading">Loading Random Review...</p>;
	}

	return (
		<section className="reviews-container">
			<p>Oh look! Here's a randomly selected review for you!</p>
			{randomReview.map((review) => {
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
