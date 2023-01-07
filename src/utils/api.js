import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://yhdc-ncnews.cyclic.app/api",
});

export const getArticles = ({ topic, author, sort_by, order }) => {
  return newsApi
    .get("/articles", {
      params: { topic: topic, author: author, sort_by: sort_by, order: order },
    })
    .then(({ data }) => {
      return data;
    });
};

export const getTopics = () => {
  return newsApi.get("/topics").then(({ data }) => {
    return data;
  });
};

export const getArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
};

export const patchArticleVoteById = (article_id, voteUpdate) => {
  return newsApi
    .patch(`/articles/${article_id}`, voteUpdate)
    .then(({ data }) => {
      return data;
    });
};

export const getUsers = () => {
  return newsApi.get("/users").then(({ data }) => {
    return data;
  });
};

export const getCommentsByArticleId = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
};

export const postCommentsByArticleId = (article_id, newComment) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, newComment)
    .then(({ data }) => {
      return data;
    });
};

export const deleteCommentById = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`).then(({ data }) => {
    return data;
  });
};
