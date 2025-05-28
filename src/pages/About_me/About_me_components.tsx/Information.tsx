import styled from "styled-components";
import { useAboutMe } from "../About_me";
import DesktopTitles from "./DesktopTitles.tsx"; 

function Information() {
  const { activeFile } = useAboutMe();
  return (
    <InformationDiv>
       <DesktopTitles />
      <InformationTitle>
        // _{activeFile ? "personal" : "professional"}-info
      </InformationTitle>
      <InformationText>
        {activeFile
          ? "/* Hi, I am Nino Kvakhadze, a highly motivated and goal-oriented individual from Georgia. I am constantly striving for self-improvement and personal growth, setting ambitious goals and working diligently to achieve them. With a strong dedication to success, I approach each day with determination and focus. I believe in continuous learning and self-discipline as key drivers of progress. Explore my journey, and you’ll see a passionate individual committed to excellence in every aspect of life. */"
          : "/* As a beginner Software Developer, I am dedicated to enhancing my skills and learning new technologies. I embarked on my software development journey and have already gained valuable experience, including building a blog page for Tkibuli Public School and winning Technovation Girls Sakartvelo 2024. I am constantly striving to improve and expand my knowledge in the field. */"}
      </InformationText>
    </InformationDiv>
  );
}

export default Information;

const InformationDiv = styled.div`
  padding: 15px;
  positionn: relative;
  top: 0;     
  left: 0;
`;
const InformationTitle = styled.h2`
margin-top: 60px;
  font-family: "Fira code", sans-serif;
  color: #fff;
  font-size: 16px;
`;
const InformationText = styled.p`

  font-family: "Fira code", sans-serif;
  color: #607b96;
  margin-top: 15px;
  font-size: 14px;
`;
