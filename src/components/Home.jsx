import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";

const Home = () => {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		getArticles()
			.then(({ articles }) => {
				setArticles(articles);
				setIsLoading(false);
			})
	}, []);

	if (isLoading) {
		return <p className="loading">Loading ...</p>
	}

	return (
		<main>
			<ul className="articles-list">
				{articles.map((article) => {
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

export default Home;