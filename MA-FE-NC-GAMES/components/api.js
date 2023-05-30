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

export { fetchReviews };
