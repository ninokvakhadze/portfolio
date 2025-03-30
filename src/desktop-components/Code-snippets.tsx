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
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
