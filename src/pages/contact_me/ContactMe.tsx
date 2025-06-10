import styled from "styled-components";
import { useState } from "react";
import Contacts from "../About_me/About_me_components.tsx/contacts";
import arrowDown from "../../assets/caret-down-solid.svg";
import FindMe from "./FindMe";
import Email from "./Email.tsx";

function ContactMe() {
  const [toggle, setToggle] = useState<{ button1: boolean; button2: boolean }>({
    button1: true,
    button2: false,
  });
  const ToggleContact = (button: "first" | "second") => {
    setToggle((prev) => ({
      button1: button === "first" ? !prev.button1 : prev.button1,
      button2: button === "second" ? !prev.button2 : prev.button2,
    }));
  };
  return (
    <ContactMeDiv>
      <div style={{ minWidth: "250px", paddingRight: "5px" }}>
        <ComponentDiv
          onClick={() => {
            ToggleContact("first");
          }}
        >
          <Arrow src={arrowDown} isOpen={toggle.button1 === true} />
          <ComponentTitle>personal_info</ComponentTitle>
        </ComponentDiv>
        {toggle.button1 ? <Contacts /> : null}
        <ComponentDiv
          onClick={() => {
            ToggleContact("second");
          }}
        >
          <Arrow src={arrowDown} isOpen={toggle.button2 === true} />
          <ComponentTitle>find_me_also_in</ComponentTitle>
        </ComponentDiv>
        {toggle.button2 ? <FindMe /> : null}
      </div>
      <Email />
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
  padding: 15px;
  height: 81vh;
  border: 1px solid #1e2d3d;
  overflow-y: auto;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
  &::-webkit-scrollbar {
    background: rgb(1, 18, 33);
    border-radius: 5px;
    transition: all 0.5s ease 0s;
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: rgb(30, 45, 61);
    transition: all 0.5s ease 0s;
    outline: rgb(28, 43, 58) solid 1px;
  }
`;

const ComponentDiv = styled.div`
  display: flex;
  justify-content: left;
  padding: 5px 15px;
  background-color: #1e2d3d;
  gap: 2.5px;
  margin-bottom: 5px;
  margin-left: -15px;
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
