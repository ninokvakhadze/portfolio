import styled from "styled-components";
import PageComponents from "./components/PageComponents";

const About_me: React.FC = () => {
  return (
    <MainDiv>
      <PageTitle>_about-me</PageTitle>
      <PageComponents title="personal-info"/>
      <PageComponents title="contacts"/>
    </MainDiv>
  );
};

export default About_me;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  //   justify-content: space-around;
  width: 94vw;
  background-color: rgba(1, 22, 39, 0.95);
//   padding: 15px;
  min-height: 81vh;
`;
const PageTitle = styled.h2`
 font-family: "Fira code", sans-serif;
 margin: 15px;
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  color: #fff
`;
