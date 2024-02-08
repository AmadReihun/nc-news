import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Expandable({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((currIsOpen) => !currIsOpen);
  };

  return (
    <div>
      <Button variant="info" size="sm" onClick={toggleOpen}>
        {isOpen ? "Hide Comments" : "Show Comments"}
      </Button>
      {isOpen ? children : null}
    </div>
  );
}
