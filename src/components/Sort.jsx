import { useSearchParams } from "react-router-dom";

const Sort = ({ setSortState, setOrderState }) => {
	const [search, setSearch] = useSearchParams();
	return (
		<div className="sorting">
			<div className="uitk-field uitk-field-select-field has-floatedLabel-label">
				<label htmlFor="sort" className="uitk-field-label is-visually-hidden">Sort by: </label>
				<select 
					name="sort" 
					id="sort" 
					className="uitk-field-select"
					defaultValue=""
					onChange={(e) => {
						const sortBy = e.target.value;
						if (sortBy.length) {
							search.set('sort_by', sortBy);
							setSearch(search);
							setSortState(sortBy)
						} else {
							if (search.get('order').length) {
								console.log(search)
							} else {
								setSearch();
							}
							setSortState(null);
						}
					}}
				>
					<option value="created_at">Date (default)</option>
					<option value="title">Title</option>
					<option value="topic">Topic</option>
					<option value="author">Author</option>
					<option value="votes">Most Favorite</option>
					<option value="comment_count">Most Reviews</option>
				</select>
			</div>
			<div className="order_by">
				<label htmlFor="order" className="uitk-field-label is-visually-hidden">Order by: </label>
				<select 
					name="order" 
					id="order" 
					className="uitk-field-select"
					defaultValue=""
					onChange={(e) => {
						const order = e.target.value;
						if (order.length) {
							search.set('order', order);
							setSearch(search);
							setOrderState(e.target.value)
						} else {
							setSearch();
							setOrderState(null)
						}
					}}
				>
					<option value="desc">Descending (default)</option>
					<option value="asc">Ascending</option>
				</select>
			</div>
		</div>
	)
}

export default Sort;