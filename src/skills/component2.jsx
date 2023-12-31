import "./component2.css";
import html from "../images/html5-logo-2.png";
import css from "../images/css3_badge.png";
import js from "../images/js-logo-png-5.png";
import reactLogo from "../images/react-logo-1000-transparent-300x300.png";
import cSharp from "../images/c-logo-icon-18.png";

function Skills() {
  return (
    <div className="skills">
      <div className="skill-div">
        <img src={html} className="image html" alt="skill" />
      </div>
      <div className="skill-div">
        <img src={css} className="image small" alt="skill"  />
      </div>
      <div className="skill-div">
        <img src={js} className="image small" alt="skill" />
      </div>
      <div className="skill-div">
        <img src={reactLogo} className="image react" alt="skill"  />
      </div>
      <div className="skill-div">
        <img src={cSharp} className="image react" alt="skill"  />
      </div>
    </div>
  );
}

export default Skills;
