import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchArticles } from "../utils/api";
import { useState } from "react";

export default function TopicsList() {

  // const [topic, setTopic] = useState('')

  // const clickHandler = (event) => {
  //   event.preventDefault();
  //   setTopic('coding')
  //   fetchArticles(topic)
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  // }


  return (
    <>
      <div className="d-grid gap-2">
        <h2>Choose your favourite topic</h2>
        <Link to={`/topics/coding`}>
          <Button variant="success" size="lg" >
            Coding
          </Button>
        </Link>
        
        <Link to={`/topics/football`}>
          <Button variant="success" size="lg">
            Football
          </Button>
        </Link>
        
        <Link to={`/topics/cooking`}>
          <Button variant="success" size="lg">
            Cooking
          </Button>
        </Link>
        
      </div>
    </>
  );
}
