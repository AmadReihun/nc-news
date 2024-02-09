import axios from "axios";

const ncApi = axios.create({
  baseURL: `https://nc-news-9ihg.onrender.com/api`,
});

export const fetchArticles = (article_id = "", topic) => {
  return ncApi.get(`/articles/${article_id}`, {
    params: { topic: topic },
  });
};

export const fetchComments = (article_id = "") => {
  return ncApi.get(`/articles/${article_id}/comments`);
};

export const patchArticleVotes = (article_id, number) => {
  return ncApi.patch(`/articles/${article_id}`, { inc_votes: number });
};

export const postComment = (article_id, username, body) => {
  return ncApi.post(`/articles/${article_id}/comments`, {
    username: `${username}`,
    body: `${body}`,
  });
};

export const deleteComment = (comment_id) => {
  return ncApi.delete(`/comments/${comment_id}`);
};

// export const fetchArticlesByQuery = (author, topic, sort_by, order) => {
//   return ncApi.get(`/articles`, {
//     params: { topic: topic, author: author, sort_by: sort_by, order: order },
//   });
// };
