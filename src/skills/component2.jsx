import "./component2.css";
import html from "../images/html5-logo-2.png";
import css from "../images/css3_badge.png";
import js from "../images/js-logo-png-5.png";
import reactLogo from "../images/react-logo-1000-transparent-300x300.png";

function Skills() {
  return (
    <div className="skills">
      <div className="skill-div">
        <img src={html} className="image" />
      </div>
      <div className="skill-div">
        <img src={css} className="image" />
      </div>
      <div className="skill-div">
        <img src={js} className="image" />
      </div>
      <div className="skill-div">
        <img src={reactLogo} className="image" />
      </div>
    </div>
  );
}

export default Skills;
