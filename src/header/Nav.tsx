import styled from "styled-components";
import { Link } from "react-router-dom";
interface HeaderProps {
  toggle: boolean;
}

const Nav: React.FC<HeaderProps> = ({ toggle }) => {
  return (
    <NavDiv toggle={toggle}>
      <Link to="/" style={{ textDecoration: "none"}}>
        <NavName>
          <NavPath>_hello</NavPath>
        </NavName>
      </Link>
      <Link to="/about-me" style={{ textDecoration: "none"}}>
        <NavName>
          <NavPath>_about-me</NavPath>
        </NavName>
      </Link>
      <Link to="/projects" style={{ textDecoration: "none",  }}>
        <NavName>
          <NavPath>_projects</NavPath>
        </NavName>
      </Link>
      <Link to="/contact-me" style={{ textDecoration: "none",  }}>
        <NavName>
          <NavPath>_contact-me</NavPath>
        </NavName>
      </Link>
    </NavDiv>
  );
};

export default Nav;

const NavDiv = styled.div<{ toggle: boolean }>`
  position: absolute;
  left: 0;
  top: 52px;
  background-color: rgba(1, 22, 39);
  width: 100%;
  min-height: 81vh;
  display: ${({ toggle }) => (toggle ? "block" : "none")};
  z-index: 1;
  @media screen and (min-width: 1024px) {
    position: static;
    display: flex;
    min-height: unset;
    justify-content: right;
    width: 50%;
  }
`;

const NavName = styled.div`
  padding: 16px;
  border: 1px solid #1e2d3d;
`;
const NavPath = styled.h3`
  font-family: "Fira code", sans-serif;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: #fff;
  @media screen and (min-width: 768px) {
    color: #607b96;
  }
`;
