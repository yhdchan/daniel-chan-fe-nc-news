import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/User";
import { getCommentsByArticleId } from "../utils/api";
import CommentAdder from "./CommentAdder";
import CommentCard from "./CommentCard";

const Comments = ({ singleArticle }) => {
	const [comments, setComments] = useState([]);
	const [commentsCount, setCommentsCount] =useState(singleArticle.comment_count);
	const [isLoading, setIsLoading] = useState(true);
	const { loggedInUser } = useContext(UserContext);

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
			<CommentAdder article_id={singleArticle.article_id} comments={comments} setComments={setComments} setCommentsCount={setCommentsCount} loggedInUser={loggedInUser}/>
			<CommentCard comments={comments} setComments={setComments} commentsCount={commentsCount} setCommentsCount={setCommentsCount} loggedInUser={loggedInUser}/>
		</section>
	)
}

export default Comments;