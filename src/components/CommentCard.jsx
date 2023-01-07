import { deleteCommentById } from "../utils/api";

const CommentCard = ({
  comments,
  setComments,
  commentsCount,
  setCommentsCount,
  loggedInUser,
}) => {
  const deleteComment = (comment_id) => {
    if (window.confirm("Are you sure that you want to remove this comment?")) {
      deleteCommentById(comment_id).then(() => {
        const updatedComments = comments.filter(
          (comment) => comment.comment_id !== comment_id
        );
        setComments(updatedComments);
        setCommentsCount(updatedComments.length);
        alert("Successfully deleted!");
      });
    }
  };

  return (
    <div id="comment-card" className="comment-card">
      <div className="comment-subheader">
        <p>{commentsCount} Comments</p>
      </div>
      <ul className="comments-list">
        {comments.map((comment) => {
          const date = new Date(comment.created_at);
          const canDetele = loggedInUser.username === comment.author;
          return (
            <li key={comment.comment_id} className="comments-list-item">
              <p className="comment-author">{comment.author}</p>
              <p className="comment-body">{comment.body}</p>
              <div className="comment-footer">
                <div className="comment-vote">
                  <p>Votes: {comment.votes}</p>
                  <button>
                    <i className="fa" aria-label="like for this comment">
                      &#xf087;
                    </i>
                  </button>
                  <button>
                    <i className="fa" aria-label="dislike for this comment">
                      &#xf165;
                    </i>
                  </button>
                </div>
                <div>
                  <p>Created at: {date.toLocaleString()}</p>
                  {canDetele && (
                    <button
                      className="comment-delete-button"
                      onClick={() => deleteComment(comment.comment_id)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CommentCard;
