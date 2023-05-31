import axios from "axios";

const gamesReviewApi = axios.create({
	baseURL: "https://games-review-database-server.onrender.com/api",
});

function fetchReviews() {
	return gamesReviewApi
		.get("/reviews")
		.then((res) => {
			return res.data;
		})
		.catch((err) => console.log(err));
}

function fetchReviewById(review_id) {
	return gamesReviewApi
		.get(`/reviews/${review_id}`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => console.log(err));
}

function fetchCommentsByReviewId(review_id) {
	return gamesReviewApi
		.get(`/reviews/${review_id}/comments`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => console.log(err));
}

export { fetchReviews, fetchReviewById, fetchCommentsByReviewId };
