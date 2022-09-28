import axios from "axios";

const newsApi = axios.create({
	baseURL: "https://yhdc-ncnews.herokuapp.com/api"
})

export const getArticles = ( {topic, author}) => {
	return newsApi.get('/articles', { params: { topic: topic, author: author } }).then(({ data }) => {
		return data;
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