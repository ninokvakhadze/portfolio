import styled from "styled-components";
import hamburger from "../assets/bars-solid.svg";
import cancel from "../assets/xmark-solid.svg";
import Nav from "./Nav";

export interface HeaderProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ toggle, setToggle }) => {
  return (
    <HeaderDiv backtoggle={toggle}>
      <Name>nino-kvakhadze</Name>
      <Hamburger
        src={toggle ? cancel : hamburger}
        onClick={() => setToggle(!toggle)}
      />
      <Nav toggle={toggle} setToggle={setToggle}/>
    </HeaderDiv>
  );
};

export default Header;

const HeaderDiv = styled.header.withConfig({
  shouldForwardProp: (prop) => prop !== "backtoggle",
})<{ backtoggle: boolean }>`
  display: flex;
  justify-content: space-between;
  background-color: ${({ backtoggle }) =>
    backtoggle ? "rgba(1, 22, 39, 1)" : "rgba(1, 22, 39, 0.95)"};
  background-position: center;
  /* padding: 15px; */
  border-bottom: 1px solid #1e2d3d;
  position: relative;
  border: 1px solid #1e2d3d;
`;

const Name = styled.h1`
  font-family: "Fira code", sans-serif;
  font-size: 16px;
  font-weight: 800;
  text-align: left;
  color: #607b96;
  padding: 15px;
  @media screen and (min-width: 768px) {
    border: 1px solid #1e2d3d;
  }
  @media screen and (min-width: 1440px) {
    padding: 15px 60px;
  }
`;
const Hamburger = styled.img`
  width: 16px;
  height: 16px;
  margin: 15px;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
