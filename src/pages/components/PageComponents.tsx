import styled from "styled-components";
import arrowDown from "../../assets/caret-down-solid.svg";

interface ComponentProps {
    title: string
  }

const PageComponents: React.FC<ComponentProps> = ({title}) =>  {
  return (
    <ComponentDiv>
      <Arrow src={arrowDown} />
      <ComponentTitle>{title}</ComponentTitle>
    </ComponentDiv>
  );
}

export default PageComponents;

const ComponentDiv = styled.div`
  display: flex;
  justify-content: left;
  padding: 5px 15px;
  background-color: #1e2d3d;
  gap: 2.5px;
  margin-bottom: 5px;
`;
const ComponentTitle = styled.p`
  font-family: "Fira code", sans-serif;
  font-size: 14px;
  font-weight: normal;
  text-align: left;
  color: #fff;
`;
const Arrow = styled.img`
  width: 16px;
  height: 16px;
  transform: rotate(270deg);
`;
