import Image from "react-bootstrap/Image";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div>
        <h2>Topics</h2>
        <br />
        <a href="/topics" rel="noopener noreferrer">
          <Image
            src="https://www.diplomacy.edu/wp-content/uploads/2022/06/Diplo-Topics-June2022-meta.webp"
            alt="topic image for the home page"
            fluid
            rounded
            style={{ width: "60rem", height: "15rem" }}
          />
        </a>
      </div>
      <br />
      <div>
        <h2>Articles</h2>
        <br />
        <a href="/articles" rel="noopener noreferrer">
          <Image
            src="https://www.thesaurus.com/e/wp-content/uploads/2021/11/20211104_articles_1000x562-790x310.png"
            alt="articles photo with a Pink Orange background for the home page"
            fluid
            rounded
            style={{ width: "60rem", height: "15rem" }}
          />
        </a>
      </div>
      <Footer />
    </>
  );
}
