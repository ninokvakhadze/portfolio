import "./App.css";
import profileImage from "./images/Group 1.svg";
import IG from "./images/IG.svg";
import FB from "./images/FB.svg";
import TW from "./images/TW.svg";
import Github from "./images/Github.svg";
import About  from "./components/component";

function App() {
  return (
    <div className="App">
      <div className="card">
        <header>
          <div className="header-texts">
            <p className="header-text">ABOUT</p>
            <p className="header-text">SKILLS</p>
            <p className="header-text">PROJECTS</p>
          </div>
          <div className="button">
            <div className="button-circle"></div>
          </div>
        </header>
        <div className="bottom-part">
          <div className="information">
            <img src={profileImage} className="profile-image" alt="profile" />
            <div className="name-about">
              <h2>NINO KVAKHADZE</h2>
              <h3>FRONTEND DEVELOPER</h3>
              <p className="information-text">
                High level experience in web design and development knowledge.
              </p>
            </div>
            <div className="logos">
              <img src={IG} alt="ig" className="logo"/>
              <img src={FB} alt="fb" className="logo"/>
              <img src={TW} alt="tw" className="logo"/>
              <img src={Github} alt="github" className="logo"/>
            </div>
          </div>
          <About/>
        </div>
      </div>
    </div>
  );
}

export default App;
