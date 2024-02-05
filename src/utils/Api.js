import axios from "axios";

const ncApi = axios.create({
  baseURL: `https://nc-news-9ihg.onrender.com/api`,
});

export const fetchTopics = () => {
  return ncApi.get(`/topics`);
};
