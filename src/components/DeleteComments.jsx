import { Button } from "react-bootstrap";
import { deleteComment } from "../utils/api";
import { useState } from "react";

export default function DeleteComments({
  comment_id,
  author,
  searchForComments,
}) {
  const [optMessage, setOptMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleDelete = () => {
    setButtonDisabled(true);
    setOptMessage("deleting your comment");
    deleteComment(comment_id)
      .then(() => {
        setOptMessage("Your comment has been deleted");
        searchForComments();
        setIsError(false);
        setButtonDisabled(false);
      })
      .catch(() => {
        setIsError(true);
      });
  };

  if (isError) {
    return (
      <p style={{ backgroundColor: "orange" }}>
        Action did not work, Please reload the page & try again shortly!
      </p>
    );
  }

  if (author === "jessjelly") {
    return (
      <>
        <p style={{ color: "green" }}>{optMessage}</p>
        <Button
          variant="danger"
          size="sm"
          type="button"
          style={{ backgroundColor: isButtonDisabled ? "grey" : null }}
          onClick={handleDelete}>
          Delete
        </Button>
      </>
    );
  }
}
