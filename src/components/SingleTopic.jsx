import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../utils/api";

const SingleTopic = () => {
	const [singleTopic, setSingleTopic] = useState([]);
	const { topic } = useParams();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		getArticles(topic)
			.then(({ articles }) => {
				setSingleTopic(articles);
				setIsLoading(false);
			})
	}, [topic]);

	if (isLoading) {
		return <p className="loading">Loading ...</p>
	}

	return (
		<main>
			<h3 className="subheader">{topic}</h3>
			<ul className="articles-list">
				{singleTopic.map((article) => {
					const date = new Date(article.created_at)
					return (
						<li className="articles-card" key={article.article_id}>
							<h3>{article.title}</h3>
							<p>
								<span>Topic: {article.topic}</span>
								<span>Author: {article.author}</span>
								<span>Created at: {date.toLocaleString()}</span>
							</p>
							<p>Votes: {article.votes}</p>
							<p>Reviews: {article.comment_count}</p>
						</li>
					)
				})}
			</ul>
		</main>
	)
}

export default SingleTopic;