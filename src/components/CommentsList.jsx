import { useEffect, useState } from "react";
import { fetchComments } from "../utils/api";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import CommentCard from "./CommentCard";
import Expandable from "./Expandable";
import PostNewComment from "./PostComment";

export default function CommentsList() {
  const { article_id } = useParams();

  const [Comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const searchForComments = () => {
    fetchComments(article_id)
      .then((response) => {
        setComments(response.data.comment);
        setIsLoading(false);
        setIsError(false);
      })
      .catch(() => {
        setIsError(true);
      });
  };

  useEffect(() => {
    searchForComments();
  }, []);

  if (isError) {
    return (
      <p style={{ backgroundColor: "orange" }}>
        Action did not work, Please reload the page & try again shortly!
      </p>
    );
  }

  if (isLoading) return <p>Loading your requested Page, please wait</p>;

  return (
    <>
      <div>
        <PostNewComment
          searchForComments={searchForComments}
          article_id={article_id}
        />
        <br />
        <h4>Comments</h4>
        {/* <Expandable> */}

        <br />
        <Row md={1} xs={1} lg={1} className="g-2 ms-10">
          {Comments.map((comment) => {
            return (
              <Col key={comment.comment_id}>
                <CommentCard
                  searchForComments={searchForComments}
                  {...comment}
                />
              </Col>
            );
          })}
        </Row>
        {/* </Expandable> */}
        <br />
      </div>
    </>
  );
}
