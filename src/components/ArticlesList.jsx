import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import ArticleCard from "./ArticleCard";
import axios from "axios";
import { useParams, useSearchParams, Link } from "react-router-dom";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { topic } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const sort_by = searchParams.get("sort_by");
  // const order_by = searchParams.get("order_by");

  const [order_by, setOrder_by] = useState("DESC")

  const orderHandler = () => {
    if (order_by === "DESC") {
      setOrder_by("ASC")
    } 
    if (order_by === "ASC") {
      setOrder_by("DESC")
    } 
  }
  

  const searchForArticles = () => {
    axios
      .get(`https://nc-news-9ihg.onrender.com/api/articles`, {
        params: { topic: topic, sort_by: sort_by, order_by: order_by },
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
  }, [topic, sort_by, order_by]);

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
        <Link to={`/articles?sort_by=votes&order_by=${order_by}`}>
          <Button variant="success" size="md">
            Sort by votes
          </Button>
        </Link>

        <Link to={"/articles?sort_by=comment_count"}>
          <Button variant="success" size="md">
            Sort by comment count
          </Button>
        </Link>

        <Link to={"/articles?sort_by=created_at"}>
          <Button variant="success" size="md">
            Sort by date
          </Button>
        </Link>

        
          <Button onClick={orderHandler} variant="success" size="md">
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
