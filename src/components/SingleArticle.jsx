import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import Comments from "./Comments";
import SingleArticleCard from "./SingleArticleCard";

const SingleArticle = () => {
	const { article_id } = useParams();
	const [singleArticle, setSingleArticle] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [err, setErr] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		getArticleById(article_id)
			.then(({ article }) => {
				setSingleArticle(article);
				setIsLoading(false);
			})
			.catch((err) => {
				setErr(err);
			})
	}, [article_id])
	
	if (err) {
		return (
			<div>
				<h3>{err.response.status}</h3>
				<h4>{err.response.data.msg}</h4>
			</div>
		)
	}

	if (isLoading) {
		return <p className="loading">Loading ...</p>
	}

	return (
		<article>
			<SingleArticleCard singleArticle={singleArticle} setSingleArticle={setSingleArticle}/>
			<Comments singleArticle={singleArticle} />
		</article>
	)
}

export default SingleArticle;