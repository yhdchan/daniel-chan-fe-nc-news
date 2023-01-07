import { useNavigate } from "react-router-dom";

const ArticleCard = ({ articles }) => {
  let navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    const article_id = event.target.value;
    const path = `/articles/${article_id}`;
    navigate(path);
  };

  return (
    <div>
      <ul className="articles-list">
        {articles.map((article) => {
          const date = new Date(article.created_at);
          return (
            <li className="articles-card" key={article.article_id}>
              <h3>{article.title}</h3>
              <section>
                <p>Topic: {article.topic}</p>
                <p>Author: {article.author}</p>
                <p>Created at: {date.toLocaleString()}</p>
              </section>
              <section>
                <p>Votes: {article.votes}</p>
              </section>
              <section>
                <p>Reviews: {article.comment_count}</p>
                <button
                  className="read-me-button"
                  value={article.article_id}
                  onClick={handleClick}
                >
                  Read Me
                </button>
              </section>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticleCard;
