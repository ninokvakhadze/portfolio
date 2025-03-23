import "./App.css";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./header/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import About_me from "./pages/About_me/About_me";
import Home from "./pages/Home";
import Projects from "./pages/Projects/Projects";
import ContactMe from "./pages/contact_me/ContactMe";
import Footer from "./footer/Footer";
import bacgroundImg from "./assets/df884c2af6c9e7fcbc6c7809c12cc684.jpg";

function App() {
  const [toggle, setToggle] = useState<boolean>(false);
  const [path, setCurrentPath] = useState(window.location.pathname)
  useEffect(() => {
      setCurrentPath(window.location.pathname);
      console.log(path) 

  }, [window.location.pathname]); 

  return (
    <Router>
      <Main>
        <Header toggle={toggle} setToggle={setToggle} />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about-me" element={<About_me/>}/>
          <Route path="projects" element={<Projects/>}/>
          <Route path="contact-me" element={<ContactMe />}/>
        </Routes>
        {toggle || path == "/" ? <Footer /> : null}
      </Main>
    </Router>
  );
}

export default App;

const Main = styled.main`
  background-image: url(${bacgroundImg});
  background-position: center;
  background-size: 100%;
  width: 100%;
  position: relative;
`;
