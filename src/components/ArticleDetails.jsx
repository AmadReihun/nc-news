import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../utils/api";
import { Image } from "react-bootstrap";
import CommentsList from "./CommentsList";
import VoteArticle from "./VoteArticle";

export default function ArticleDetails() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const searchForArticleById = () => {
    fetchArticles(article_id)
    .then((response) => {
      setArticle(response.data.article[0]);
      setIsLoading(false);
      setIsError(false);
    })
    .catch(() => {
      setIsError(true);
    });
  };

  useEffect(() => {
    searchForArticleById();
  }, []);

  if (isError) {
    return (
      <p style={{ backgroundColor: "orange" }}>
        The requested article does not exist!
      </p>
    );
  }

  if (isLoading) return <p>Loading your requested Page, please wait</p>;

  return (
    <>
      <article>
        <h4>{article.title}</h4>
        <br />
        <Image
          style={{
            display: "block",
            width: "40rem",
            height: "20rem",
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
      </article>

      <VoteArticle {...article} />
      <hr />
      <CommentsList />
    </>
  );
}
