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
const ProjectsFilterDiv = styled.div`
  }
`;


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
  appearance: none;
-webkit-appearance: none;
-moz-appearance: none;

width: 18px;
height: 18px;

border: 2px solid #1e2d3d;
background-color: #1e2d3d;

border-radius: 4px;
cursor: pointer;
position: relative;
outline: none;
transition: background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

&:checked {
background-color: #1e2d3d;
border-color: #1e2d3d;
}

&:checked::before {
content: '';
display: block;
width: 8px;
height: 14px;
border: solid white;
border-width: 0 3px 3px 0;
transform: rotate(45deg) translate(-50%, -50%);
position: absolute;
top: 50%;
left: 50%;
opacity: 1;
}

&:focus {
box-shadow: 0 0 0 2px rgba(30, 45, 61, 0.8);
}
`;

const FilterName = styled.p`
  font-weight: 200;
  font-size: 16px;
  color: white;
  user-select: none;
  cursor: pointer;
`;
