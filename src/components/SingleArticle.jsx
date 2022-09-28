import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import SingleArticleCard from "./SingleArticleCard";

const SingleArticle = () => {
	const { article_id } = useParams();
	const [singleArticle, setSingleArticle] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		getArticleById(article_id)
			.then(({ article }) => {
				setSingleArticle(article);
				setIsLoading(false);
			})
	}, [article_id])

	if (isLoading) {
		return <p className="loading">Loading ...</p>
	}

	return (
		<article>
			<SingleArticleCard singleArticle={singleArticle}/>
		</article>
	)
}

export default SingleArticle;