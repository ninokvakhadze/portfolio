import "./App.css";
import { useState} from 'react';
import styled from "styled-components";
import Header from "./header/Header";
import About_me from "./pages/About_me/About_me"
import Home from "./pages/Home";
import Projects from "./pages/Projects/Projects";
import ContactMe from "./pages/contact_me/ContactMe";
import Footer from "./footer/Footer";
import bacgroundImg from "./assets/df884c2af6c9e7fcbc6c7809c12cc684.jpg"

function App() {
  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <Main>
      <Header toggle={toggle} setToggle={setToggle}/>
      {/* <Home/> */}
      {/* <About_me/> */}
      {/* <Projects/> */}
      <ContactMe/>
      {toggle ?<Footer/> : null}
    </Main>
  );
}

export default App;

const Main = styled.main`
  background-image: url(${bacgroundImg});
  background-position: center;
  background-size: 100%;
  width: 100%;
  position: relative
`;
