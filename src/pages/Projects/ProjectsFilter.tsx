import styled from "styled-components";

const techOptions = [
  "React",
  "Javascript",
  "Node",
  "Styled-components",
  "Typescript",
  "API",
  "mongodb",
];

type ProjectsFilterProps = {
  selectedTechs: string[];
  setSelectedTechs: React.Dispatch<React.SetStateAction<string[]>>;
};

const ProjectsFilter = ({
  selectedTechs,
  setSelectedTechs,
}: ProjectsFilterProps) => {
  const handleChange = (tech: string) => {
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  return (
    <ProjectsFilterDiv>
      <FilterBox>
        {techOptions.map((tech) => (
          <FilterDiv key={tech}>
            <FilterInput
              type="checkbox"
              checked={selectedTechs.includes(tech)}
              onChange={() => handleChange(tech)}
            />
            <FilterName>{tech}</FilterName>
          </FilterDiv>
        ))}
      </FilterBox>
    </ProjectsFilterDiv>
  );
};

export default ProjectsFilter;

const ProjectsFilterDiv = styled.div``;

const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
`;

const FilterDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FilterInput = styled.input.attrs({ type: "checkbox" })`
  cursor: pointer;
`;

const FilterName = styled.p`
  font-weight: 200;
  font-size: 16px;
  color: white;
  user-select: none;
  cursor: pointer;
`;
