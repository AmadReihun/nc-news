import { Card } from "react-bootstrap";

export default function CommentCard({
  comment_id,
  body,
  article_id,
  author,
  votes,
  created_at,
}) {
  return (
    <>
      <Card>
        <small className="ms-2" style={{margin:"10px"}}>Author : {author}</small>

        <small className="ms-2">
          Published at : {new Date(created_at).toLocaleDateString()}
        </small >
        <br />
        <small className="ms-2">{body}</small>
        <br />
        <small className="ms-2">Likes : {votes}</small>
        <br />
      </Card>
    </>
  );
}
