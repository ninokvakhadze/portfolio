import styled from "styled-components";
import { createContext, useState, useContext } from "react";
import AboutMeNav from "./AboutMeNav";

interface AboutMeContextType {
  activeFile: boolean;
  setActiveFile: React.Dispatch<React.SetStateAction<boolean>>;
  toggleHandler: (button: "first" | "second" | null) => void;
  active: "first" | "second" | null;
  setActive: React.Dispatch<React.SetStateAction<"first" | "second" | null>>;
}

const AboutMeContext = createContext<AboutMeContextType | undefined>(undefined);

export function useAboutMe() {
  const context = useContext(AboutMeContext);
  if (!context)
    throw new Error("useAboutMe must be used within an AboutMeProvider");
  return context;
}

const About_me: React.FC = () => {
  const [active, setActive] = useState<"first" | "second" | null>(null);
  const [activeFile, setActiveFile] = useState<boolean>(true);

  const toggleHandler = (button: "first" | "second" | null) => {
    setActive((prev) => (prev === button ? null : button));
  };

  return (
    <AboutMeContext.Provider
      value={{ activeFile, setActiveFile, toggleHandler, active, setActive }}
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
  min-height: 81vh;
`;
