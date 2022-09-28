import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const Home = () => {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		getArticles({})
			.then(({ articles }) => {
				setArticles(articles);
				setIsLoading(false);
			})
	}, []);

	if (isLoading) {
		return <p className="loading">Loading ...</p>
	}

	return <ArticleCard articles={articles} />
}

export default Home;