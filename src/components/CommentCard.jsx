import { Card } from "react-bootstrap";
import DeleteComments from "./DeleteComments";

export default function CommentCard({
  comment_id,
  body,
  article_id,
  author,
  votes,
  created_at,
  searchForComments,
}) {
  return (
    <>
      <Card>
        <small className="ms-2" style={{ margin: "10px" }}>
          Author : {author}
        </small>

        <small className="ms-2">
          Published at : {new Date(created_at).toLocaleDateString()}
        </small>
        <br />
        <small className="ms-2">{body}</small>
        <br />
        <small className="ms-2">Likes : {votes}</small>
        <small className="ms-2">Comment ID : {comment_id}</small>
      </Card>
      <DeleteComments
        comment_id={comment_id}
        author={author}
        searchForComments={searchForComments}
      />
    </>
  );
}
