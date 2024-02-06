import axios from "axios";

const ncApi = axios.create({
  baseURL: `https://nc-news-9ihg.onrender.com/api`,
});

export const fetchArticles = () => {
  return ncApi.get(`/articles`);
};
