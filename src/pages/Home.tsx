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
        <GitLink></GitLink>
      </FindMe>
    </HomeDiv>
  );
}

export default Home;

const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  background-color: rgba(1, 22, 39, 0.95);
  padding: 15px;
`;
const Introduction = styled.div``;
const Hello = styled.h2`
  font-family: "Fira code", sans-serif;
  font-size: 18px;
  text-align: left;
  font-weight: 400;
  color: #e5e9f0;
`;
const Job = styled.h3`
  font-family: "Fira code", sans-serif;
  font-size: 32px;
  text-align: left;
  color: #4d5bce;
`;
const NameSpan = styled.span`
  font-size: 58px;
  text-align: left;
  font-weight: 600;
  margin-top: 10px;
`;
const FindMe = styled.div`
  font-family: "Fira code", sans-serif;
  font-size: 16px;
  font-weight: normal;
  text-align: left;
  color: #607b96;
`;
const Commented = styled.p``;
const GitLink = styled.div``;
