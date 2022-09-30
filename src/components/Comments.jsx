import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../utils/api";
import CommentAdder from "./CommentAdder";
import CommentCard from "./CommentCard";

const Comments = ({ singleArticle }) => {
	const [comments, setComments] = useState([]);
	const [commentsCount, setCommentsCount] =useState(singleArticle.comment_count);
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
			<CommentAdder article_id={singleArticle.article_id} comments={comments} setComments={setComments} setCommentsCount={setCommentsCount}/>
			<CommentCard comments={comments} commentsCount={commentsCount}/>
		</section>
	)
}

export default Comments;