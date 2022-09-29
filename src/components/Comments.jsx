import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../utils/api";
import CommentCard from "./CommentCard";

const Comments = ({ singleArticle }) => {
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		getCommentsByArticleId(singleArticle.article_id)
			.then(({ comments }) => {
				setComments(comments);
				setIsLoading(false);
			})
	}, [singleArticle.article_id])

	if (isLoading) {
		return <p className="loading">Loading ...</p>
	}

	return (
		<section>
			<CommentCard comments={comments} comment_count={singleArticle.comment_count}/>
		</section>
	)
}

export default Comments;