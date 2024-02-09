import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Topics() {
  return (
    <>
      <div className="d-grid gap-2">
        <h4>Choose your favourite topic</h4>
        <Link to={`/topics/coding`} className="d-grid gap-2">
          <Button variant="success" size="sm">
            Coding
          </Button>
        </Link>
        
        <Link to={`/topics/football`} className="d-grid gap-2">
          <Button variant="success" size="sm">
            Football
          </Button>
        </Link>
        
        <Link to={`/topics/cooking`} className="d-grid gap-2">
          <Button variant="success" size="sm">
            Cooking
          </Button>
        </Link>
        
      </div>
    </>
  );
}
