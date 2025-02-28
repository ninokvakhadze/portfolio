import styled from "styled-components";
import hamburger from "../assets/bars-solid.svg";

function Header() {
  return (
    <HeaderDiv>
      <Name>nino-kvakhadze</Name>
      <Hamburger src={hamburger} />
    </HeaderDiv>
  );
}

export default Header;

const HeaderDiv = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: rgba(1, 22, 39, 0.95);
  background-position: center;
  padding: 15px;
  border-bottom: 1px solid #1e2d3d;
`;

const Name = styled.h1`
  font-family: "Fira code", sans-serif;
  font-size: 16px;
  font-weight: 800;
  text-align: left;
  color: #607b96;
`;
const Hamburger = styled.img`
  width: 16px;
  height: 16px;
`;
