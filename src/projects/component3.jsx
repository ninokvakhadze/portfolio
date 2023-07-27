import "./component3.css";
import advice from "../images/advice.jpg";

function Projects() {
  return (
    <div className="projects">
      <Project
        image={advice}
        name="advice generator"
        link="https://ninokvakhadze.github.io/advice-generator-app/"
        link2 = "https://github.com/ninokvakhadze/advice-generator-app"
      />
      <Project image={advice} name="advice generator" />
      <Project image={advice} name="advice generator" />
      <Project image={advice} name="advice generator" />
      <Project image={advice} name="advice generator" />
      <Project image={advice} name="advice generator" />
      <Project image={advice} name="advice generator" />
      <Project image={advice} name="advice generator" />
      <Project image={advice} name="advice generator" />
    </div>
  );
}

export default Projects;

function Project(props) {
  return (
    <div className="project-div">
      <img src={props.image} alt="project" className="project-image" />
      <h2 className="name">{props.name}</h2>
      <div className="project-buttons">
          <a className="link" href={props.link}>
            Live
          </a>
          <a className="link" href={props.link2}>
            Github
          </a>
      </div>
    </div>
  );
}
