import { Button } from "react-bootstrap";

export default function TopicsList() {
  return (
    <>
      <div className="d-grid gap-2">
        <h2>Choose your favourite topic</h2>
        <Button variant="success" size="lg">
          Coding
        </Button>
        <Button variant="success" size="lg">
          Football
        </Button>
        <Button variant="success" size="lg">
          Cooking
        </Button>
      </div>
    </>
  );
}
