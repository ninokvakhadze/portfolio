import styled, { keyframes } from "styled-components";
import DesktopBackground from "../assets/bg-main-desktop.png";
import CodeSnippets from "../desktop-components/Code-snippets";

function Home() {
  return (
    <HomeDiv>
      <IntroDiv>
        <Introduction>
          <Hello>
            Hi all. I am <br />
            <NameSpan>Nino Kvakhadze</NameSpan>
          </Hello>
          <Job>Front-End Developer</Job>
        </Introduction>
        <FindMe>
          <Commented>// find my profile on Github:</Commented>
          <GitLink>
            <Variable>const</Variable> <VarName>githubLink</VarName> ={" "}
            <Linked href="https://github.com/ninokvakhadze">
              "https://github.com/ninokvakhadze"
            </Linked>
          </GitLink>
        </FindMe>
      </IntroDiv>
      <CodeSnippets />
    </HomeDiv>
  );
}

export default Home;

const HomeDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 94vw;
  background-color: rgba(1, 22, 39, 0.95);
  padding: 15px;
  min-height: 81vh;
  border: 1px solid #1e2d3d;
  justify-content: space-between;
  background-size: cover;
  @media screen and (min-width: 1440px) {
    background-image: url(${DesktopBackground});
    background-repeat: no-repeat;
    background-position: left 200px top -240px;
  }
`;
const IntroDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Introduction = styled.div``;

const fadeInSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px); /* Starts 50px to the left of its final position */
  }
  to {
    opacity: 1;
    transform: translateX(0); /* Slides to its natural position */
  }
`;
const Hello = styled.h2`
  font-family: "Fira code", sans-serif;
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  color: #e5e9f0;
  opacity: 0; /* Ensures text is hidden before animation */
  animation: ${fadeInSlideUp} 0.8s ease-out forwards;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
const Job = styled.h3`
  font-family: "Fira code", sans-serif;
  text-align: left;
  color: #4d5bce;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
  opacity: 0;
  animation: ${slideInRight} 0.8s ease-out forwards;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
const NameSpan = styled.span`
  font-size: 46px;
  text-align: left;
  font-weight: 600;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    font-size: 58px;
  }
`;
const FindMe = styled.div`
  font-family: "Fira code", sans-serif;
  font-size: 14px;
  font-weight: normal;
  text-align: left;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  opacity: 0;
  animation: ${slideInRight} 0.8s ease-out forwards;
`;
const Commented = styled.p`
  color: #607b96;
`;
const GitLink = styled.p`
  color: #fff;
`;
const Linked = styled.a`
  color: #e99287;
`;
const Variable = styled.span`
  color: #4d5bce;
`;
const VarName = styled.span`
  color: #43d9ad;
`;
