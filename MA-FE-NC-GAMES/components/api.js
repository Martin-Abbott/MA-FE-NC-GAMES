import axios from "axios";

const gamesReviewApi = axios.create({
	baseURL: "https://games-review-database-server.onrender.com/api",
});

function fetchReviews(params) {
	return gamesReviewApi
		.get("/reviews", params)
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

function patchReviewVotes(review_id, num) {
	return gamesReviewApi
		.patch(`/reviews/${review_id}`, { inc_votes: num })
		.then((res) => {
			return res;
		});
}

function postComment(review_id, comment) {
	return gamesReviewApi
		.post(`/reviews/${review_id}/comments`, comment)
		.then((res) => {
			return res;
		});
}

function fetchCategories() {
	return gamesReviewApi.get("/categories").then((res) => {
		return res.data;
	});
}

function deleteComment(comment_id) {
	return gamesReviewApi.delete(`/comments/${comment_id}`).then((res) => {
		return res.data;
	});
}

export {
	fetchReviews,
	fetchReviewById,
	fetchCommentsByReviewId,
	patchReviewVotes,
	postComment,
	fetchCategories,
	deleteComment,
};
