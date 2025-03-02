import "./App.css";
import { useState} from 'react';
import styled from "styled-components";
import Header from "./header/Header";
import Home from "./pages/Home";
import Footer from "./footer/Footer";
import bacgroundImg from "./assets/df884c2af6c9e7fcbc6c7809c12cc684.jpg"

function App() {
  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <Main>
      <Header toggle={toggle} setToggle={setToggle}/>
      <Home/>
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
