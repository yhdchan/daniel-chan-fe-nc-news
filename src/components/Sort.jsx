const Sort = ({ setSortState, setOrderState }) => {
	return (
		<div className="sorting">
			<div className="sort_by">
				<label htmlFor="sort" className="uitk-field-label is-visually-hidden">Sort by: </label>
				<select 
					name="sort" 
					id="sort" 
					className="uitk-field-select"
					defaultValue={'created_at'}
					onChange={(e) => setSortState(e.target.value)}
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
					defaultValue={'desc'}
					onChange={(e) => setOrderState(e.target.value)}
				>
					<option value="desc">Descending (default)</option>
					<option value="asc">Ascending</option>
				</select>
			</div>
		</div>
	)
}

export default Sort;