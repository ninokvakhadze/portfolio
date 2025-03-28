import styled from "styled-components";

function Home() {
  return (
    <HomeDiv>
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
          <Variable>const</Variable> <VarName>githubLink</VarName> = <Linked href="https://github.com/ninokvakhadze">"https://github.com/ninokvakhadze"</Linked>
        </GitLink>
      </FindMe>
    </HomeDiv>
  );
}

export default Home;

const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 94vw;
  background-color: rgba(1, 22, 39, 0.95);
  padding: 15px;
  min-height: 81vh;
  border: 1px solid #1e2d3d;

`;
const Introduction = styled.div``;
const Hello = styled.h2`
  font-family: "Fira code", sans-serif;
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  color: #e5e9f0;
  @media screen and (min-width: 768px){
    font-size: 18px;
  }
`;
const Job = styled.h3`
  font-family: "Fira code", sans-serif;
  text-align: left;
  color: #4d5bce;
  @media screen and (min-width: 768px){
    font-size: 32px;
  }
`;
const NameSpan = styled.span`
  font-size: 46px;
  text-align: left;
  font-weight: 600;
  margin-top: 10px;
  @media screen and (min-width: 768px){
  font-size: 58px;
  }
`;
const FindMe = styled.div`
  font-family: "Fira code", sans-serif;
  font-size: 14px;
  font-weight: normal;
  text-align: left;
  @media screen and (min-width: 768px){
  font-size: 16px;
  }
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
