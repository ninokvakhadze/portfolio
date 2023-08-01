import "./App.css";
import profileImage from "./images/Group 1.svg";
import linkIn from "./images/linkedin.svg";
import FB from "./images/FB.svg";
import TW from "./images/TW.svg";
import Github from "./images/Github.svg";
import About from "./about/component";
import Projects from "./projects/component3";
import Skills from "./skills/component2";
import React, { useState } from "react";

function App() {
  const [activeComponent, setActiveComponent] = useState(0);
  const [changeColor, setChangeColor] = useState(false);
  const colorChange = (index) => {
    setChangeColor((prevState) => !prevState);
    const body = document.querySelector("body");
    const button = document.querySelector(".button2");

    if (changeColor) {
      body.style.backgroundColor = "";
      button.style.justifyContent = "";
    } else {
      body.style.backgroundColor = "black";
      button.style.justifyContent = "flex-end";
    }
  };

  const about = (index) => {
    setActiveComponent(0);
  };
  const skills = (index) => {
    setActiveComponent(1);
  };
  const projects = (index) => {
    setActiveComponent(2);
  };
  return (
    <div className="app">
      <div className="card">
        <header>
          <div className="header-texts">
            <p onClick={about} className="header-text">
              ABOUT
            </p>
            <p onClick={skills} className="header-text">
              SKILLS
            </p>
            <p onClick={projects} className="header-text">
              PROJECTS
            </p>
          </div>
          <div className="button2" onClick={colorChange}>
            <div className="button-circle"></div>
          </div>
        </header>
        <div className="bottom-part">
          <div className="information">
            <img src={profileImage} className="profile-image" alt="profile" />
            <div className="name-about">
              <h2>NINO KVAKHADZE</h2>
              <h3>FRONTEND DEVELOPER</h3>
              <p className="information-text">Junior Frontend Developer</p>
            </div>
            <div className="logos">
              <a href="https://www.linkedin.com/in/nino-kvakhadze-654a0a255/">
                <img src={linkIn} alt="ig" className="logo in" />
              </a>
              <a href="https://www.facebook.com/nino.kvakhadze.92/">
                <img src={FB} alt="fb" className="logo" />
              </a>
              <a href="https://twitter.com/ninokvakhadze">
                <img src={TW} alt="tw" className="logo" />
              </a>
              <a href="https://github.com/ninokvakhadze">
                <img src={Github} alt="github" className="logo" />
              </a>
            </div>
            <button className={changeColor ? "active" : ""}>Contact me</button>
          </div>
          {activeComponent === 0 && <About />}
          {activeComponent === 1 && <Skills />}
          {activeComponent === 2 && <Projects />}
        </div>
      </div>
    </div>
  );
}

export default App;
