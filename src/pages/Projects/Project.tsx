import styled from "styled-components";
import { ProjectData } from "./Projects";

const Project = ({
  id,
  title,
  description,
  technologies,
  liveLink,
  githubLink,
  image,
}: ProjectData) =>  {
  return (
    <ProjectDiv>
      <ProjectTitle>
        Project {id} <ProjectTitleSpan>/ {title}</ProjectTitleSpan>
      </ProjectTitle>
      <ProjectCard>
        <ProjectImg src={image} />
        <ProjectDescription>
          {description}
        </ProjectDescription>
        <ProjectButton><a href={liveLink}>view-project</a></ProjectButton>
      </ProjectCard>
    </ProjectDiv>
  );
}

export default Project;

const ProjectDiv = styled.div`
  /* flex: 1 1 300px; */
`;
const ProjectCard = styled.div`
  height: 360px;
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
  border-radius: 15px;
  height: 200px;
`;

const ProjectDescription = styled.p`
  font-size: 14px;
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
