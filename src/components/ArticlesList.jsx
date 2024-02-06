import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { fetchArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const searchForArticles = () => {
    fetchArticles().then((response) => {
      setArticles(response.data.article);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    searchForArticles();
  }, []);

  if (isLoading) return <p>Loading your requested Page, please wait</p>;

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
        <Row md={2} xs={1} lg={3} className="g-4">
          {articles.map((article) => {
            return (
              <Col key={article.article_id}>
                <ArticleCard {...article} />
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
}
