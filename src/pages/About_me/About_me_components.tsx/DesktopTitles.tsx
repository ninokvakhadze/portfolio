import React from "react";
import styled from "styled-components";
import cancel from "../../../assets/xmark-solid.svg";
import { useAboutMe } from "../About_me";

const DesktopTitles: React.FC = () => {
  const {
    desktopTitleButtons = { button1: false, button2: false },
    setDesktopTitleButtons,
    setActiveFile,
  } = useAboutMe();
  React.useEffect(() => {}, [desktopTitleButtons]);
  return (
    <TitlesDiv>
      {desktopTitleButtons.button1 && (
        <Title onClick={() => setActiveFile(true)}>
          <h3>personal</h3>
          <Cancel
            src={cancel}
            alt="cancel"
            onClick={(e) => {
              e.stopPropagation();
              setDesktopTitleButtons((prev: typeof desktopTitleButtons) => ({
                ...prev,
                button1: false,
              }));
            }}
          />
        </Title>
      )}
      {desktopTitleButtons.button2 && (
        <Title onClick={() => setActiveFile(false)}>
          <h3>professional</h3>
          <Cancel
            src={cancel}
            alt="cancel"
            onClick={(e) => {
              e.stopPropagation();
              setDesktopTitleButtons((prev: typeof desktopTitleButtons) => ({
                ...prev,
                button2: false,
              }));
            }}
          />
        </Title>
      )}
    </TitlesDiv>
  );
};

export default DesktopTitles;

const TitlesDiv = styled.div`
  display: none;
  margin: -15px 0 0 -18px;
  position: fixed;
  // top: 0;
  // left: 0;
  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

const Title = styled.div`
  font-family: "Fira code", sans-serif;
  color: #fff;
  font-size: 12px;
  border: 1px solid #fff;
  padding: 10px;
  border: 1px solid #1e2d3d;
  display: flex;
  gap: 35px;
  justify-content: space-between;
`;
const Cancel = styled.img`
  width: 16px;
  height: 16px;
`;
