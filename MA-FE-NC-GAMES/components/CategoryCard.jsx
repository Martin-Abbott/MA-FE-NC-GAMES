import { Link } from "react-router-dom";

const CategoryCard = (props) => {
	const { slug, description } = props;

	return (
		<article className="category-card">
			<h2>
				<Link to={`/reviews?category=${slug}`} key={slug}>
					{slug}
				</Link>
			</h2>
			<p>{description}</p>
		</article>
	);
};

export default CategoryCard;
