import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/reviews">All Reviews</Link>
			<Link to="/categories">Categories</Link>
		</nav>
	);
}

export default Nav;
