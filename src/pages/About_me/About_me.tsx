import styled from "styled-components";
import { createContext, useState, useContext } from "react";
import AboutMeNav from "./About_me_components.tsx/AboutMeNav";

type ActiveState = { button1: boolean; button2: boolean };

interface AboutMeContextType {
  activeFile: boolean;
  setActiveFile: React.Dispatch<React.SetStateAction<boolean>>;
  toggleHandler: (button: "first" | "second") => void;
  active: {
    button1: boolean;
    button2: boolean;
  };
  setActive: React.Dispatch<React.SetStateAction<ActiveState>>;
  setDesktopTitleButtons: React.Dispatch<React.SetStateAction<ActiveState>>;
  desktopTitleButtons: ActiveState;
}

const AboutMeContext = createContext<AboutMeContextType | undefined>(undefined);

export function useAboutMe() {
  const context = useContext(AboutMeContext);
  if (!context)
    throw new Error("useAboutMe must be used within an AboutMeProvider");
  return context;
}

const About_me: React.FC = () => {
  const [active, setActive] = useState<{ button1: boolean; button2: boolean }>({
    button1: true,
    button2: false,
  });
  const [desktopTitleButtons, setDesktopTitleButtons] = useState<{
    button1: boolean;
    button2: boolean;
  }>({
    button1: true,
    button2: true,
  });


  const [activeFile, setActiveFile] = useState<boolean>(true);

  const toggleHandler = (button: "first" | "second") => {
    setActive((prev) => ({
      button1: button === "first" ? !prev.button1 : prev.button1,
      button2: button === "second" ? !prev.button2 : prev.button2,
    }));
  };

  return (
    <AboutMeContext.Provider
      value={{ activeFile, setActiveFile, toggleHandler, active, setActive, setDesktopTitleButtons, desktopTitleButtons }}
    >
      <MainDiv>
       
        <AboutMeNav />
      </MainDiv>
    </AboutMeContext.Provider>
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
  border: 1px solid #1e2d3d;
  height: 81vh;
  overflow-y: auto;
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
