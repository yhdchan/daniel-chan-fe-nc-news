import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const DisplayArticles = ({ sortState, orderState }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getArticles({ sort_by: sortState, order: orderState }).then(
      ({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      }
    );
  }, [sortState, orderState]);

  if (isLoading) {
    return <p className="loading">Loading ...</p>;
  }

  return (
    <main>
      <ArticleCard articles={articles} />
    </main>
  );
};

export default DisplayArticles;
