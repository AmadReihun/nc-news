import { useState } from "react";
import { patchArticleVotes } from "../utils/api";
import { Button } from "react-bootstrap";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

export default function VoteArticle({ votes, article_id, comment_count }) {
  const [Likes, setLikes] = useState(votes);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisLiked, setIsDisliked] = useState(false);
  const [isError, setIsError] = useState(false);

  function handleLikeClick(event) {
    if (!isLiked) {
      event.preventDefault();
      setLikes((currLikes) => {
        return currLikes + 1;
      });
      patchArticleVotes(article_id, 1)
        .then(() => {
          setIsError(false);
          setIsLiked(true);
          setIsDisliked(false);
        })
        .catch(() => {
          setIsError(true);
        });
    }
  }

  function handleDislikeClick(event) {
    if (!isDisLiked) {
      event.preventDefault();
      setLikes((currLikes) => {
        return currLikes - 1;
      });
      patchArticleVotes(article_id, -1)
        .then(() => {
          setIsError(false);
          setIsDisliked(true);
          setIsLiked(false);
        })
        .catch(() => {
          setIsError(true);
        });
    }
  }

  if (isError) {
    return (
      <p style={{ backgroundColor: "orange" }}>
        Action did not work, Please reload the page & try again shortly!
      </p>
    );
  }

  return (
    <>
      <span>Likes : {Likes}</span>
      {/* <span className="ms-3">Comments : {comment_count}</span> */}
      <br />
      <br />
      <div className="justify-content-left">
        <AiFillLike
          color="blue"
          size="30"
          onClick={handleLikeClick}
          style={{ color: isLiked ? "grey" : null }}
        />
        <AiFillDislike
          color="red"
          size="30"
          className="ms-5"
          onClick={handleDislikeClick}
          style={{ color: isDisLiked ? "grey" : null }}
        />
      </div>
    </>
  );
}
