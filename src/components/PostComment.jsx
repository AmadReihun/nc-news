import axios from "axios";
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

export default function PostNewComment({ article_id, searchForComments}) {
  const [comment, setComment] = useState({
    username: "jessjelly",
    body: "",
  });
  const [optMessage, setOptMessage] = useState('')
  const [isError, setIsError] = useState(false);
  

  const commentHandler = (event) => {
    setComment((currComment) => {
      return { ...currComment, body: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOptMessage('Your comment has been submitted')
    postComment(article_id, comment.username, comment.body)
      .then((response) => {
        searchForComments()
        setIsError(false);
        console.log(response.data.comment);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
      comment.body='';
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
      <p style={{color: "green"}}>{optMessage}</p>
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
        <Button variant="primary" type="submit" size="sm">
          Comment
        </Button>
      </Form>
      
      <hr />
    </>
  );
}

// postComment(article_id, comment.username, comment.body )

// axios
//   .post("https://nc-news-9ihg.onrender.com/api/articles/34/comments", {
//     username: comment.username,
//     body: comment.body,
//   })

{
  /* <InputGroup className="mb-3">
        <label htmlFor="username"></label>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            id="username"
            required
            value={comment.username}
            onChange={commentHandler}
          />
        </InputGroup> */
}
