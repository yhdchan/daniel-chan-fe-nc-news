import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { postCommentsByArticleId } from "../utils/api";

const CommentAdder = ({ article_id, comments, setComments, setCommentsCount }) => {
	const [newComment, setNewComment] = useState('');
	const { loggedInUser } = useContext(UserContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		postCommentsByArticleId(article_id, {
			username: loggedInUser.username,
			body: newComment,
		})
		.then(({ comment }) => {
			setCommentsCount((currCount) => {
				return currCount + 1;
			})
			setComments((currComments) => {
				return [comment, ...currComments];
			});
			setNewComment('')
		})
		.then(() => {
			alert('You just added a new comment!')
		})
	};

	return (
		<form className="comment-adder" onSubmit={(e) => handleSubmit(e)}>
			<label htmlFor="newComment">Add a comment</label>
			<textarea 
				id="newComment"
				value={newComment}
				onChange={(e) => setNewComment(e.target.value)}
				placeholder='add a comment...'
				required
			></textarea>
			<button>Comment</button>
		</form>
	)
}

export default CommentAdder;