import { useState } from "react";
import {
  Button,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  FormText,
  InputGroup,
} from "react-bootstrap";
import { postComment } from "../utils/api";

export default function PostNewComment({ article_id, searchForComments }) {
  const [comment, setComment] = useState({
    username: "jessjelly",
    body: "",
  });
  const [optMessage, setOptMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const commentHandler = (event) => {
    setComment((currComment) => {
      return { ...currComment, body: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonDisabled(true);
    setOptMessage("sending your comment");
    postComment(article_id, comment.username, comment.body)
      .then(() => {
        setOptMessage("Your comment has been posted successfully");
        searchForComments();
        setIsError(false);
        setButtonDisabled(false);
      })
      .catch(() => {
        setIsError(true);
      });
    comment.body = "";
  };

  if (isError) {
    return (
      <p style={{ backgroundColor: "orange" }}>
        Action did not work, Please reload the page & try again shortly!
      </p>
    );
  }

  return (
    <>
      <p>Post your comment</p>
      <p style={{ color: "green" }}>{optMessage}</p>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <label htmlFor="body"></label>
          <FormControl
            placeholder="Your comment"
            as="textarea"
            aria-label="With textarea"
            id="body"
            required
            value={comment.body}
            onChange={commentHandler}
          />
        </InputGroup>
        <br />
        <Button
          variant="primary"
          type="submit"
          size="sm"
          style={{ backgroundColor: isButtonDisabled ? "grey" : null }}>
          Comment
        </Button>
      </Form>

      <hr />
    </>
  );
}
