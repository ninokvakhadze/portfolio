import styled from "styled-components";
import image from "../../assets/df884c2af6c9e7fcbc6c7809c12cc684.jpg";

function Project() {
  return (
    <ProjectDiv>
      <ProjectTitle>
        Project 1 <ProjectTitleSpan>/ name</ProjectTitleSpan>
      </ProjectTitle>
      <ProjectCard>
        <ProjectImg src={image} />
        <ProjectDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate
          tempus efficitur.
        </ProjectDescription>
        <ProjectButton>view-project</ProjectButton>
      </ProjectCard>
    </ProjectDiv>
  );
}

export default Project;

const ProjectDiv = styled.div`
width: 100%;
`;
const ProjectCard = styled.div`
  height: 328px;
  padding: 0 0 32px;
  margin: 2px;
  border-radius: 15px;
  border: solid 1px #1e2d3d;
  background-color: #011221;
`;
const ProjectTitle = styled.h2`
  font-size: 16px;
  text-align: left;
  color: #5565e8;
  font-weight: 800;
`;
const ProjectTitleSpan = styled.span`
  color: #607b96;
  font-weight: 400;
`;

const ProjectImg = styled.img`
  width: 100%;
  height: 50%;
  border-radius: 15px;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: left;
  color: #607b96;
  margin: 15px;
`;
const ProjectButton = styled.button`
  margin: 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 8px;
  background-color: #1c2b3a;
  border: none;
  color: #fff;
`;
