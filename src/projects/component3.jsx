import "./component3.css";
import todo from "../images/todo.PNG";
import notifications from "../images/notifications.PNG";
import interactiveRating from  "../images/interactive-rating.PNG";
import tipCalculator from "../images/tipcalculator.PNG";
import passwordGenerator from "../images/password.PNG";
import calculatorImg from "../images/calculator.PNG";
import priceRange from "../images/price-range.jpg"
import advice from "../images/advice.jpg";

function Projects() {
  return (
    <div className="projects">
      <Project
        image={todo}
        name="To Do app"
        link="https://todo-app-beta-mauve-57.vercel.app"
        link2 = "https://github.com/ninokvakhadze/Todo-app"
      />
      <Project
        image={notifications}
        name="notifications page"
        link = "https://notification-page-delta.vercel.app/?vercelToolbarCode=yIVArV9eJmdgbk-"
        link2="https://github.com/ninokvakhadze/notification-page"
      />
      <Project
        image={interactiveRating}
        name="interactive rating"
        link="https://ninokvakhadze.github.io/interactive_rating_component/"
        link2 = "https://github.com/ninokvakhadze/interactive_rating_component"
      />
      <Project
        image={tipCalculator}
        name="Tip calculator"
        link="https://ninokvakhadze.github.io/tip-calculator/"
        link2 = "https://github.com/ninokvakhadze/tip-calculator"
      />
       <Project
        image={passwordGenerator}
        name="Password generator"
        link="https://ninokvakhadze.github.io/password-generator-app/"
        link2 = "https://github.com/ninokvakhadze/password-generator-app"
      />
       <Project
        image={calculatorImg}
        name="Calculator"
        link="https://ninokvakhadze.github.io/calculator/"
        link2 = "https://github.com/ninokvakhadze/calculator"
      />
         <Project
        image={priceRange}
        name="Interactive rating"
        link="https://ninokvakhadze.github.io/interactive-pricing-component/"
        link2 = "https://github.com/ninokvakhadze/interactive-pricing-component"
      />
       <Project
        image={calculatorImg}
        name="Calculator"
        link="https://ninokvakhadze.github.io/calculator/"
        link2 = "https://github.com/ninokvakhadze/calculator"
      />
         <Project
        image={priceRange}
        name="Interactive rating"
        link="https://ninokvakhadze.github.io/interactive-pricing-component/"
        link2 = "https://github.com/ninokvakhadze/interactive-pricing-component"
      />
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
