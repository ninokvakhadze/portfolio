import styled from "styled-components";
import Contacts from "../About_me/About_me_components.tsx/contacts";
import arrowDown from "../../assets/caret-down-solid.svg";
import FindMe from "./FindMe";

function ContactMe() {
  const toggle = true;
  return (
    <ContactMeDiv>
      <ComponentDiv>
        <Arrow src={arrowDown} isOpen={toggle === true} />
        <ComponentTitle>personal_info</ComponentTitle>
      </ComponentDiv>
      <Contacts />
      <ComponentDiv>
        <Arrow src={arrowDown} isOpen={toggle === true} />
        <ComponentTitle>find_me_also_in</ComponentTitle>
      </ComponentDiv>  
    <FindMe/>
    </ContactMeDiv>
  );
}

export default ContactMe;

const ContactMeDiv = styled.div`
  display: flex;
  flex-direction: column;
  //   justify-content: space-around;
  width: 94vw;
  background-color: rgba(1, 22, 39, 0.95);
  //   padding: 15px;
  height: 81vh;
  overflow-y: auto;
  padding: 15px;
`;
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
const Arrow = styled.img<{ isOpen: boolean }>`
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease-in-out;
  transform: rotate(-90deg);
  ${({ isOpen }) =>
    isOpen &&
    `
      transform: rotate(0deg);
    `}
`;
