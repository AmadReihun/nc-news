import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Welcome to NC News Platform</h1>

      <img
        src="https://lh3.googleusercontent.com/proxy/1DojxYRlTi6CD72cS5KahKHdGkEt5t7vJcpZ4boGRTgEJDUhZ29Cz1hD7V5Ff2yFoMdK3qL2WwzxkcvJhOKDK_-4WsfpkxaWDdYAwLcjUGQ3vRFsjaR-i_07lzZluS8B"
        alt="Colourful welcome photo"
        className="img-fluid"
      />
      <br />
      <br />
      <div>
        <h2>Articles</h2>
        <a href="/articles" target="_blank" rel="noopener noreferrer">
          <Image
            src="https://www.thesaurus.com/e/wp-content/uploads/2021/11/20211104_articles_1000x562-790x310.png"
            alt="articles photo with a Pink Orange background"
            fluid
            rounded
          />
        </a>
      </div>
    </>
  );
}
