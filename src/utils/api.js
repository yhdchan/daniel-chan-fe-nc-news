import axios from "axios";

const newsApi = axios.create({
	baseURL: "https://yhdc-ncnews.herokuapp.com/api"
})

export const getArticles = ( {topic, author}) => {
	return newsApi.get('/articles', { params: { topic: topic, author: author } })
		.then(({ data }) => {
		return data
	})
}

export const getTopics = () => {
	return newsApi.get('/topics')
		.then(({ data }) => {
			return data;
		})
}

export const getArticleById = (article_id) => {
	return newsApi.get(`/articles/${article_id}`)
		.then(({ data }) => {
			return data;
		})
}

export const patchArticleVoteById = (article_id, voteUpdate) => {
	return newsApi.patch(`/articles/${article_id}`, voteUpdate)
		.then(({ data }) => {
			return data;
		})
}

export const getUsers = () => {
	return newsApi.get('/users')
		.then(({ data }) => {
			return data;
		})
}

export const getCommentsByArticleId = (article_id) => {
	return newsApi.get(`/articles/${article_id}/comments`)
	.then(({ data }) => {
		return data;
	})
}