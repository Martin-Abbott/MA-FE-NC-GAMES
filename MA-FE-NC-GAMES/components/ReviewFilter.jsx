export default function ReviewFilter({
	sortBy,
	setSortBy,
	sortOrder,
	setSortOrder,
	params,
	setParams,
}) {
	const handleSortByChange = (event) => {
		setSortBy(event.target.value);
		const newSortParam = new URLSearchParams(params);
		newSortParam.set("sort_by", event.target.value);
		setParams(newSortParam);
	};

	const handleSortOrderChange = (event) => {
		setSortOrder(event.target.value);
		const newOrderParam = new URLSearchParams(params);
		newOrderParam.set("order_by", event.target.value);
		setParams(newOrderParam);
	};

	return (
		<form>
			<legend>Review Filter</legend>
			<label htmlFor="sortBy">Sort By: </label>
			<select
				id="sortBy"
				value={sortBy}
				defaultValue={params.get("sort_by")}
				onChange={handleSortByChange}
			>
				<option value="created_at">Date</option>
				<option value="title">Title</option>
				<option value="votes">Votes</option>
				<option value="comment_count">Comments</option>
				<option value="designer">Designer</option>
				<option value="owner">Owner</option>
			</select>
			<label htmlFor="sortOrder">Order: </label>
			<select
				id="sortOrder"
				value={sortOrder}
				defaultValue={params.get("order_by")}
				onChange={handleSortOrderChange}
			>
				<option value="desc">Descending</option>
				<option value="asc">Ascending</option>
			</select>
		</form>
	);
}
