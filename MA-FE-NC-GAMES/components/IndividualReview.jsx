import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewById } from "./api";
import { IndividualReviewCard } from "../components/IndividualReviewCard";

export default function IndividualReview() {
	const [review, setReview] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { review_id } = useParams();

	useEffect(() => {
		fetchReviewById(review_id)
			.then(({ review }) => {
				return review;
			})
			.then((review) => {
				setReview(review);
				setIsLoading(false);
			});
	}, []);

	if (isLoading) {
		return <p className="loading">Loading...</p>;
	}

	return (
		<section className="container">
			{review.map((individualReview) => {
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
				} = individualReview;
				return (
					<IndividualReviewCard
						key={review_id}
						title={title}
						category={category}
						designer={designer}
						owner={owner}
						review_body={review_body}
						review_img_url={review_img_url}
						created_at={created_at}
						votes={votes}
					/>
				);
			})}
		</section>
	);
}
