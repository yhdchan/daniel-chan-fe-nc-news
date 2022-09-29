import { useState } from "react";
import LikeButton from "./LikeButton";

const SingleArticleCard = ({ singleArticle, setSingleArticle }) => {
	const [likes, setLikes] = useState(singleArticle.votes);
	const date = new Date(singleArticle.created_at)

	return (
		<section key={singleArticle.article_id}className="single-article">
			<h3 className="article-title">{singleArticle.title}</h3>
			<div>
				<p>Topic: {singleArticle.topic}</p>
				<p>Author: {singleArticle.author}</p>
			</div>
			<p className="article-body">{singleArticle.body}</p>
			<div id="votes">
				<i className="fa">&#xf087;</i>
				<span>{likes}</span>
			</div>
			<div>
				<LikeButton singleArticle={singleArticle} setSingleArticle={setSingleArticle} likes={likes} setLikes={setLikes}/>
				<p>Created at: {date.toLocaleString()}</p>
			</div>
		</section>
	)

}

export default SingleArticleCard;