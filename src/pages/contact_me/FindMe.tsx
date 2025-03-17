import styled from "styled-components";
import linkimg from "../../assets/arrow-up-right-from-square-solid.svg";

const FindMe: React.FC = () => {
  return (
    <FindMeDiv>
      <LinkDiv>
        <LinkImg src={linkimg} />
        <FindMeLink href="https://www.instagram.com">Instagram</FindMeLink>
      </LinkDiv>
      <LinkDiv>
        <LinkImg src={linkimg} />
        <FindMeLink href="https://www.twitter.com">Twitter</FindMeLink>
      </LinkDiv>
      <LinkDiv>
        <LinkImg src={linkimg} />
        <FindMeLink href="https://www.linkedin.com">LinkedIn</FindMeLink>
      </LinkDiv>
    </FindMeDiv>
  );
};

export default FindMe;

const FindMeDiv = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 10px;
`;

const LinkDiv = styled.div`
  display: flex;
  justify-content: left;
`;

const FindMeLink = styled.a`
  font-size: 16px;
  color: #607b96;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
  }
`;
const LinkImg = styled.img`
  width: 16px;
  height: 16px;
`;