import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../utils/api";
import { Image } from "react-bootstrap";

export default function ArticleDetails() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const searchForArticleById = () => {
    fetchArticles(article_id).then((response) => {
      setArticle(response.data.article[0]);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    searchForArticleById();
  }, []);

  if (isLoading) return <p>Loading your requested Page, please wait</p>;

  return (
    <>
      <article>
        <h4>{article.title}</h4>
        <br />
        <Image
          style={{
            display: "block",
            width: "900%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          src={article.article_img_url}
          alt="an image to describe each articles"
          fluid
        />
        <br />

        <small>Author : {article.author}</small>
        <br />
        <small>
          Published at : {new Date(article.created_at).toLocaleDateString()}
        </small>
        <br />
        <small>Topic : {article.topic}</small>
        <br />
        <br />
        <p>{article.body}</p>

        <span>Likes : {article.votes}</span>
        <span className="ms-3">Comments : {article.comment_count}</span>
      </article>
    </>
  );
}
