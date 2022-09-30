import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const SingleTopic = ({ sortState, orderState }) => {
	const [singleTopic, setSingleTopic] = useState([]);
	const { topic } = useParams();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		getArticles({ topic: topic, sort_by: sortState, order: orderState})
			.then(({ articles }) => {
				setSingleTopic(articles);
				setIsLoading(false);
			})
	}, [topic, sortState, orderState]);

	if (isLoading) {
		return <p className="loading">Loading ...</p>
	}

	return (
		<main>
			<h3 className="subheader">{topic}</h3>
			<ArticleCard articles={singleTopic}/>
		</main>
	)
}

export default SingleTopic;