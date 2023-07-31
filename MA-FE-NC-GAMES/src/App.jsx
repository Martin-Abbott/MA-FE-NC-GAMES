import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../components/Home";
import Nav from "../components/Nav";
import ReviewList from "../components/ReviewList";
import IndividualReview from "../components/IndividualReview";
import CategoryList from "../components/CategoryList";

function App() {
	return (
		<BrowserRouter>
			<>
				<Nav />
				<h1>Bizarre Boardgame Bazaar</h1>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/reviews" element={<ReviewList />} />
					<Route path="/reviews/:review_id" element={<IndividualReview />} />
					<Route path="/categories" element={<CategoryList />} />
				</Routes>
			</>
		</BrowserRouter>
	);
}

export default App;
