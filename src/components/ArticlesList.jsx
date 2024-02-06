import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { fetchArticles } from "../utils/Api";
import ArticleCard from "./ArticleCard";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);

  const searchForArticles = () => {
    fetchArticles().then((response) => {
      
      setArticles(response.data.article);
    });
  };

  useEffect(() => {
    searchForArticles();
  }, []);

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
        <br />
        <ul>
          
          {articles?.map(
            ({
              author,
              title,
              article_id,
              topic,
              created_at,
              votes,
              article_img_url,
              comment_count,
            }) => {
              return (
                
                <ArticleCard
                  key={article_id}
                  author={author}
                  title={title}
                  article_id={article_id}
                  topic={topic}
                  created_at={created_at}
                  votes={votes}
                  article_img_url={article_img_url}
                  comment_count={comment_count}
                />
              );
            }
          )}
        </ul>
      </div>
    </>
  );
}
