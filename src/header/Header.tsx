import styled from "styled-components";
import hamburger from "../assets/bars-solid.svg";
import cancel from "../assets/xmark-solid.svg";
import Nav from "./Nav";

interface HeaderProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ toggle, setToggle }) => {
  return (
    <HeaderDiv backToggle={toggle}>
      <Name>nino-kvakhadze</Name>
      <Hamburger
        src={toggle ? cancel : hamburger}
        onClick={() => setToggle(!toggle)}
      />
      <Nav toggle={toggle} />
    </HeaderDiv>
  );
};

export default Header;

const HeaderDiv = styled.header<{ backToggle: boolean }>`
  display: flex;
  justify-content: space-between;
  background-color: ${({ backToggle }) =>
    backToggle ? "rgba(1, 22, 39, 1)" : "rgba(1, 22, 39, 0.95)"};
  background-position: center;
  padding: 15px;
  border-bottom: 1px solid #1e2d3d;
  position: relative;
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
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
