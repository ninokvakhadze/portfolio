import styled from "styled-components";
import { ProjectData } from "./Projects";
import githubIcon from "../../assets/github-brands.svg";

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};

const Project = ({
  id,
  title,
  description,
  liveLink,
  githubLink,
  image,
}: ProjectData) => {
  return (
    <ProjectDiv>
      <ProjectTitle>
        Project {id} <ProjectTitleSpan>/ {title}</ProjectTitleSpan>
      </ProjectTitle>
      <ProjectCard>
        <ProjectImg src={image} />
        <ProjectDescription>{description}</ProjectDescription>
        <ButtonsContainer>
          <ProjectButton disabled={!liveLink}>
            <a style={linkStyle} href={liveLink}>
              view-project
            </a>
          </ProjectButton>
          <a style={linkStyle} href={githubLink}>
            <GithubLink src={githubIcon} />
          </a>
        </ButtonsContainer>
      </ProjectCard>
    </ProjectDiv>
  );
};

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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 8px;
  background-color: #1c2b3a;
  border: none;
  color: #fff;
  cursor: pointer;
  transition:
    background-color 0.2s ease-in-out,
    opacity 0.2s ease-in-out;

  &:hover {
    background-color: #2a3d50;
  }

  &:active {
    background-color: #1a2530;
  }

  &:disabled {
    background-color: #101c25;
    color: #5a6b7d;
    cursor: not-allowed;
    opacity: 0.8;
    pointer-events: none;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const GithubLink = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
`;
