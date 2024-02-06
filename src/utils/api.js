import axios from "axios";

const ncApi = axios.create({
  baseURL: `https://nc-news-9ihg.onrender.com/api`,
});

export const fetchArticles = (article_id = "") => {
  return ncApi.get(`/articles/${article_id}`);
};

export const fetchComments = (article_id = "") => {
  return ncApi.get(`/articles/${article_id}/comments`);
};

