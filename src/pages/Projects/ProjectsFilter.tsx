import styled from "styled-components";

function ProjectsFilter() {
  return (
    <ProjectsFilterDiv>
      <FilterBox>
        <FilterDiv>
          <FilterInput type="checkbox" />
          <FilterName>React</FilterName>
        </FilterDiv>
        <FilterDiv>
          <FilterInput type="checkbox" />
          <FilterName>Javascript</FilterName>
        </FilterDiv>
        <FilterDiv>
          <FilterInput type="checkbox" />
          <FilterName>Node</FilterName>
        </FilterDiv>
        <FilterDiv>
          <FilterInput type="checkbox" />
          <FilterName>Styled-components</FilterName>
        </FilterDiv>
        <FilterDiv>
          <FilterInput type="checkbox" />
          <FilterName>Typescript</FilterName>
        </FilterDiv>
      </FilterBox>
    </ProjectsFilterDiv>
  );
}

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
  justify-content: left;
  gap: 10px;
`;
const FilterInput = styled.input.attrs({ type: 'checkbox' })`

`;
const FilterName = styled.p`
  font-weight: 200;
  font-size: 16px;
  color: white;
`;
