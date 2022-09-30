const CommentCard = ({ comments, commentsCount }) => {
	return (
		<div id="comment-card" className="comment-card">
			<div className="comment-subheader">
				<p>Comments:</p>
				<p>Total reviews: {commentsCount}</p>
			</div>
			<ul className="comments-list">
				{comments.map((comment) => {
					const date = new Date(comment.created_at)
					return (
						<li key={comment.comment_id} className="comments-list-item" >
							<p className="comment-author">{comment.author}</p>
							<p className="comment-body">{comment.body}</p>
							<div className="comment-footer">
								<div className="comment-vote">
									<p>Votes: {comment.votes}</p>
									<button>
										<i 
											className="fa" aria-label="like for this comment"
										>&#xf087;</i>
									</button>
									<button>
										<i 
											className="fa" aria-label="dislike for this comment"
										>&#xf165;</i>
									</button>
								</div>
								<p>Created at: {date.toLocaleString()}</p>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	)
}

export default CommentCard;