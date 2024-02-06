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
      <Card >
        <small>Author : {author}</small>
        
        <small>
          Published at : {new Date(created_at).toLocaleDateString()}
        </small>
        <br />
        <small>{body}</small>
        <br />
        <small>Likes : {votes}</small>
        <br />
      </Card>
    </>
  );
}
