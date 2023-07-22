import "./component.css";
import fire from "../images/fire.svg";
import education from "../images/education.svg";
import calendar from "../images/calendar.svg";

function About() {
  return (
    <div className="about">
      <div className="about-div">
        <h1>About</h1>
        <p className="about-text">
          Web developer, with extensive knowledge and years of experience,
          working in web technologies and UI/UX design, delivering quality work.
        </p>
      </div>
      <div className="components">
        <Component image={fire} h41="Year" h42="experience" h5="6" />
        <Component image={fire} h41="Year" h42="experience" h5="6" />
        <Component image={fire} h41="Year" h42="experience" h5="6" />
      </div>
      <div className="qualification">
        <div className="qualification-part1">
          <h1>Qualification</h1>
          <p className="journey">My personal journey</p>
        </div>
        <div className="qualification-part2">
          <div className="education">
            <img src={education} alt="education-img" />
            <p className="education-text">Education</p>
          </div>
          <div className="education-places">
            <Component2  work1="Computer" work2="Engineer" place="Peru - University" date="2009 - 2014"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

function Component(props) {
  return (
    <div className="box">
      <img src={props.image} alt="logo" className="logoss" />
      <div className="texts">
        <h4>
          {props.h41}
          <br />
          {props.h42}
        </h4>
        <h5>{props.h5}</h5>
      </div>
    </div>
  );
}

function Component2(props2) {
  return (
    <div className="box">
      <p className="work">{props2.work1}<br/>{props2.work2}</p>
      <div className="box-botom">
        <p className="education-place">{props2.place}</p>
        <div className="dates">
          <img src={calendar} alt="calendar" />
          <p className="date">{props2.date}</p>
        </div>
      </div>
    </div>
  );
}
