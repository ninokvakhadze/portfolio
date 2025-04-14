import styled from "styled-components";
import CodeImg from "../assets/code-snippet-no-opacity.svg";
import CodeOpacity from "../assets/code-snippet.png";

export default function CodeSnippets() {
  return (
    <CodeDiv>
      <img src={CodeOpacity} />
      <img src={CodeImg} />
      <img src={CodeOpacity} />
    </CodeDiv>
  );
}

const CodeDiv = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
  }
`;
