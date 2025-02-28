import "./App.css";
import styled from "styled-components";
import Header from "./header/Header";
import Home from "./pages/Home";
import bacgroundImg from "./assets/df884c2af6c9e7fcbc6c7809c12cc684.jpg"

function App() {
  return (
    <Main>
      <Header />
      <Home/>
    </Main>
  );
}

export default App;

const Main = styled.main`
  background-image: url(${bacgroundImg});
  background-position: center;
  background-size: 100%;
`;
