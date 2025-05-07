import "./App.css";
import { useState } from "react";
import styled from "styled-components";
import Header from "./header/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import About_me from "./pages/About_me/About_me";
import Home from "./pages/Home";
import Projects from "./pages/Projects/Projects";
import ContactMe from "./pages/contact_me/ContactMe";
import Footer from "./footer/Footer";
import bacgroundImg from "./assets/df884c2af6c9e7fcbc6c7809c12cc684.jpg";

function App() {
  const [toggle, setToggle] = useState<boolean>(false);
  const location = useLocation(); 

  return (
    <Main>
      <Header toggle={toggle} setToggle={setToggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-me" element={<About_me />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact-me" element={<ContactMe />} />
      </Routes>
      {toggle || location.pathname === "/" ? <Footer /> : null}
    </Main>
  );
}

export default App;

const Main = styled.main`
  background-image: url(${bacgroundImg});
  background-position: center;
  background-size: 100%;
  width: 100%;
  position: relative;
  @media screen and (min-width: 1440px) {
    background: rgba(1, 22, 39, 0.95);
  }
`;
