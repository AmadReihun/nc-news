import { useEffect, useState } from "react";
import { fetchComments } from "../utils/api";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import CommentCard from "./CommentCard";

export default function CommentsList() {
  const { article_id } = useParams();

  const [Comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const searchForComments = () => {
    fetchComments(article_id).then((response) => {
      setComments(response.data.comment);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    searchForComments();
  }, []);

  return (
    <>
      <div>
        <br />
        <Row md={1} xs={1} lg={1} className="g-2 ms-10">
          {Comments.map((comment) => {
            return (
              <Col key={comment.comment_id}>
                <CommentCard {...comment} />
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
}
