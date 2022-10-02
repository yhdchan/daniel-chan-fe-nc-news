import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const DisplayUserArticles = ({ loggedInUser, sortState, orderState }) => {
	const [userArticles, setUsersArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		getArticles({author: loggedInUser.username, sort_by: sortState, order: orderState})
			.then(({ articles }) => {
				setUsersArticles(articles)
				setIsLoading(false);
			})
	}, [loggedInUser.username, sortState, orderState]);

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

export default DisplayUserArticles;