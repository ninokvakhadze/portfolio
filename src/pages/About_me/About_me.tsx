import styled from "styled-components";
import { useState } from "react";
import arrowDown from "../../assets/caret-down-solid.svg";
import Contacts from "./contacts";

const About_me: React.FC = () => {
  const [active, setActive] = useState<"first" | "second" | null>(null);

  const toggleHandler = (button: "first" | "second") => {
    setActive((prev) => (prev === button ? null : button)); 
  };

  return (
    <MainDiv>
      <PageTitle>_about-me</PageTitle>
      <ComponentDiv onClick={() => toggleHandler("first")}>
        <Arrow src={arrowDown} isOpen={active === "first"} />
        <ComponentTitle>personal_info</ComponentTitle>
      </ComponentDiv>
      <ComponentDiv onClick={() => toggleHandler("second")}>
        <Arrow src={arrowDown} isOpen={active === "second"} />
        <ComponentTitle>contacts</ComponentTitle>
      </ComponentDiv>
      {active === "second" ? <Contacts /> : null}
    </MainDiv>
  );
};

export default About_me;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  //   justify-content: space-around;
  width: 94vw;
  background-color: rgba(1, 22, 39, 0.95);
  //   padding: 15px;
  min-height: 81vh;
`;
const PageTitle = styled.h2`
  font-family: "Fira code", sans-serif;
  margin: 15px;
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  color: #fff;
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
