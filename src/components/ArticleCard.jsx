import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

export default function ArticleCard({
  author,
  title,
  article_id,
  topic,
  created_at,
  votes,
  article_img_url,
  comment_count,
}) {
  return (
    <>
      <Link to={`/articles/${article_id}`}>
        <Image
          style={{
            display: "block",
            width: "900%",
            marginLeft: "auto",
            marginRight: "auto",
            objectFit: "cover",
          }}
          src={article_img_url}
          alt="an image to describe each articles"
          fluid
        />
        <br />
        <h6>{title}</h6>
      </Link>
      <small>Author : {author}</small>
      <br />
      <small>Published at : {new Date(created_at).toLocaleDateString()}</small>
      <br />
      <Link to={`/topics/${topic}`}>
        <small>Topic : {topic}</small>
      </Link>

      <br />
      <small>Likes : {votes}</small>
      <br />
    </>
  );
}
