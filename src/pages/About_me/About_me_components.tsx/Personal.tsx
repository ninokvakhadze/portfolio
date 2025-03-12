import styled from "styled-components";
import fileArrow from "../../../assets/chevron-up-solid.svg";
import fileImg1 from "../../../assets/folder-solid-red.svg";
import fileImg2 from "../../../assets/folder-solid-blue.svg";
import { useAboutMe } from "../About_me";



export default function Personal() {
  const {  setActiveFile } = useAboutMe();

  return (
    <PersonalDiv>
      <FileDiv onClick={() => {setActiveFile(true)}}>
        <FileArrow src={fileArrow} />
        <FileImg src={fileImg1} />
        <FileName>personal</FileName>
      </FileDiv>
      <FileDiv onClick={() => {setActiveFile(false)}}>
        <FileArrow src={fileArrow} />
        <FileImg src={fileImg2} />
        <FileName>professional</FileName>
      </FileDiv>
    </PersonalDiv>
  );
}

const PersonalDiv = styled.div`
  padding: 10px 15px;
`;
const FileDiv = styled.div`
  display: flex;
  justify-content: left;
  gap: 7px;
  margin-top: 5px;
`;
const FileArrow = styled.img`
  width: 12px;
  transform: rotate(90deg);
`;
const FileImg = styled.img`
  width: 12px;
`;
const FileName = styled.p`
  font-family: "Fira code", sans-serif;
  font-size: 12px;
  text-align: left;
  color: #fff;
`;
