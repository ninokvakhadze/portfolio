import styled from "styled-components";
import { useEffect, useState } from "react";
import arrowDown from "../../assets/caret-down-solid.svg";
import ProjectsFilter from "./ProjectsFilter";
import Project from "./Project";
import data from "../../data/data.json";

export type ProjectData = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubLink?: string;
  liveLink?: string;
};


function Projects() {
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<ProjectData[]>(data);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (selectedTechs.length === 0) {
      setFilteredProjects(data);
    } else {
      setFilteredProjects(
        data.filter((project) =>
          selectedTechs.every((tech) => project.technologies.includes(tech))
        )
      );
    }
  }, [selectedTechs]);

  return (
    <ProjectsDiv>
      <PageTitle>_about-me</PageTitle>
      <ComponentDiv
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <Arrow src={arrowDown} isOpen={toggle === true} />
        <ComponentTitle>personal_info</ComponentTitle>
      </ComponentDiv>
      {toggle ? (
        <ProjectsFilter
        selectedTechs={selectedTechs} setSelectedTechs={setSelectedTechs} 
        />
      ) : null}
      <ProjectsBox>
        {filteredProjects.map((project: ProjectData) => (
          <Project key={project.id} {...project} />
        ))}
      </ProjectsBox>
    </ProjectsDiv>
  );
}

export default Projects;

const ProjectsDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 94vw;
  background-color: rgba(1, 22, 39, 0.95);
  padding: 15px;
  height: 81vh;
  overflow-y: auto;
  border: 1px solid #1e2d3d;
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
  cursor: pointer;
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

const ProjectsBox = styled.div`
  margin-top: 15px;
  gap: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

