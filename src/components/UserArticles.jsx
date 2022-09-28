import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const UserArticle = ({ loggedInUser }) => {
	const [userArticles, setUsersArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		getArticles({author: loggedInUser.username})
			.then(({ articles }) => {
				setUsersArticles(articles)
				setIsLoading(false);
			})
	}, [loggedInUser.username]);

	if (isLoading) {
		return <p className="loading">Loading ...</p>
	}

	return (
		<main>
			<h3 className="subheader">Your Articles</h3>
			<ArticleCard articles={userArticles}/>
		</main>
	)
}

export default UserArticle;