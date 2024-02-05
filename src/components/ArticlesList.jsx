import { useState } from "react";
import { Button } from "react-bootstrap";

export default function ArticlesList() {

  const [articles, setArticles] = useState([]);

  const searchForArticles


  return (
    <>
      <div className="d-grid gap-2">
        <Button variant="success" size="md">
          Sort by date
        </Button>
        <Button variant="success" size="md">
          Sort by comment count
        </Button>
        <Button variant="success" size="md">
          Sort by votes
        </Button>
      </div>
      <div>

        
      
      </div>
    </>
  );
}
