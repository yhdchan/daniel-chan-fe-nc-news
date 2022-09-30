import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const SingleTopic = ({ sortState, orderState }) => {
	const [singleTopic, setSingleTopic] = useState([]);
	const { topic } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [err, setErr] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		getArticles({ topic: topic, sort_by: sortState, order: orderState})
			.then(({ articles }) => {
				setSingleTopic(articles);
				setIsLoading(false);
			})
			.catch((err) => {
				setErr(err);
			})
	}, [topic, sortState, orderState]);

	if (err) {
		return (
			<div>
				<h3>Status: {err.response.status}</h3>
				<h4>{err.response.data.msg}</h4>
			</div>
		)
	}

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