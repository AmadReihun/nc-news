import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Topics from "./pages/Topics";
import Articles from "./pages/Articles";
import Users from "./pages/Users";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Container className="nb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/users" element={<Users />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
