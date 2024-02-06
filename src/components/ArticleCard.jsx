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
    <div>
      <Image
        style={{ display: "block", width: "900%", marginLeft: "auto", marginRight: "auto" }}
        src={article_img_url}
        alt="an image to describe each articles"
        fluid
      />
      <br />
      <h6>{title}</h6>
      <hr/>
    </div>
  );
}
