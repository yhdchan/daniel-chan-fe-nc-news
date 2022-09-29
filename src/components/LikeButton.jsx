import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/User";
import { patchArticleVoteById } from "../utils/api";

const LikeButton = ({ setSingleArticle, singleArticle, likes, setLikes }) => {
	const { loggedInUser } = useContext(UserContext);
	const [isLiked, setIsLiked] = useState(JSON.parse(localStorage.getItem(`${loggedInUser.username}_${singleArticle.article_id}_LIKE_STATE`)) || false);
	
	const label = isLiked ? 'Liked' : 'Like';

	const liked = () => {
		if (isLiked) {
			setLikes(likes - 1);
			patchArticleVoteById(singleArticle.article_id, { inc_votes: -1 })
			.then(({ article }) => {
				setSingleArticle(article);
			})
			.catch((err) => {
				setIsLiked(!isLiked);
			})
		} else {
			setLikes(likes + 1);
			patchArticleVoteById(singleArticle.article_id, { inc_votes: 1 })
				.then(({ article }) => {
					setSingleArticle(article);
				})
				.catch((err) => {
					setIsLiked(!isLiked);
				})
		}
		setIsLiked(!isLiked);
	};

	useEffect(() => {
    window.localStorage.setItem(`${loggedInUser.username}_${singleArticle.article_id}_LIKE_STATE`, JSON.stringify(isLiked));
	}, [isLiked, loggedInUser.username])

	return (
		<button 
			id="like"
			className={isLiked ? 'liked' : null}
			onClick={liked}>
			<i className="fa fa-thumbs-up"></i>
			<span className="icon" aria-label="votes for this article">{label}</span>
		</button>
	)
}

export default LikeButton;