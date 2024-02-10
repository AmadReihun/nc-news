import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import ArticleCard from "./ArticleCard";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { topic, sort_by } = useParams();

  const searchForArticles = () => {
    axios
      .get(`https://nc-news-9ihg.onrender.com/api/articles`, {
        params: { topic: topic, sort_by },
      })
      .then((response) => {
        setArticles(response.data.article);
        setIsLoading(false);
        setIsError(false);
      })
      .catch(() => {
        setIsError(true);
      });
  };

  useEffect(() => {
    searchForArticles();
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
      <div className="d-grid gap-2">
        <Button variant="success" size="md">
          Sort by votes
        </Button>

        <Button type="button" variant="success" size="md">
          Sort by comment count
        </Button>
        <Button variant="success" size="md">
          Sort by date
        </Button>
        <Button variant="success" size="md">
          Ascending and descending
        </Button>
      </div>

      <div>
        <br />
        <Row md={2} xs={1} lg={3} className="g-4">
          {articles.map((article) => {
            return (
              <Col key={article.article_id}>
                <ArticleCard topic={topic} {...article} />
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
}
