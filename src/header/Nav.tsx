import styled from "styled-components";

interface HeaderProps {
  toggle: boolean;
}

const Nav: React.FC<HeaderProps> = ({ toggle }) => {
  return (
    <NavDiv toggle={toggle}>
      <NavName>
        <NavPath>_hello</NavPath>
      </NavName>
      <NavName>
        <NavPath>_about-me</NavPath>
      </NavName>
      <NavName>
        <NavPath>_projects</NavPath>
      </NavName>
      <NavName>
        <NavPath>_contact-me</NavPath>
      </NavName>
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
  @media screen and (min-width: 768px) {
    position: static;
    display: flex;
    min-height: unset;
    justify-content: space-between;
    width: 50%;
  }
`;

const NavName = styled.div`
  padding: 15px;
  border-top: 0.1px solid #607b96;
  border-bottom: 0.1px solid #607b96;
  @media screen and (min-width: 768px) {
    padding: unset;
    border-top: none;
    border-bottom: none;
  }
`;
const NavPath = styled.h3`
  font-family: "Fira code", sans-serif;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: #fff;
   @media screen and (min-width: 768px) {
    color: #607b96
  }
`;
