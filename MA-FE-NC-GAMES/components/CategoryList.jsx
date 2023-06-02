import { useState, useEffect } from "react";
import { fetchCategories } from "./api";
import CategoryCard from "./CategoryCard";

export default function CategoryList() {
	const [categories, setCategories] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchCategories()
			.then(({ categories }) => {
				return categories;
			})
			.then((categories) => {
				setCategories(categories);
				setIsLoading(false);
			});
	}, []);

	if (isLoading) {
		return <p className="loading">Loading Categories...</p>;
	}

	return (
		<section className="categories-container">
			<h2>Review Categories</h2>
			{categories.map((category) => {
				const { slug, description } = category;
				return (
					<CategoryCard key={slug} slug={slug} description={description} />
				);
			})}
		</section>
	);
}
