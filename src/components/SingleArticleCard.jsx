const SingleArticleCard = ({ singleArticle }) => {
	const date = new Date(singleArticle.created_at)
	return (
		<section className="single-article">
			<h3 className="article-title">{singleArticle.title}</h3>
			<div>
				<p>Topic: {singleArticle.topic}</p>
				<p>Author: {singleArticle.author}</p>
			</div>
			<p className="article-body">{singleArticle.body}</p>
			<div>
				<button>{singleArticle.votes}
					<span aria-label="votes for this article">👍🏼</span>
				</button>
				<p>Created at: {date.toLocaleString()}</p>
			</div>
		</section>
	)

}

export default SingleArticleCard;