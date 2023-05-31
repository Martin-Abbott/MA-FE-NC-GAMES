import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "../components/Nav";
import ReviewList from "../components/ReviewList";
import IndividualReview from "../components/IndividualReview";

function App() {
	return (
		<BrowserRouter>
			<>
				<Nav />
				<h1>MA-FE-NC-GAMES</h1>
				<Routes>
					<Route path="/" element={<ReviewList />} />
					<Route path="/reviews/:review_id" element={<IndividualReview />} />
				</Routes>
			</>
		</BrowserRouter>
	);
}

export default App;
