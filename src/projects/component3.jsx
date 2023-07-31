import "./component3.css";
import todo from "../images/todo.PNG";
import notifications from "../images/notifications.PNG";
import interactiveRating from  "../images/interactive-rating.PNG";
import tipCalculator from "../images/tipcalculator.PNG";
import passwordGenerator from "../images/password.PNG";
import calculatorImg from "../images/calculator.PNG";
import priceRange from "../images/price-range.jpg"
import advice from "../images/advice.jpg";
import countdown from "../images/countdown.PNG";
import pod from "../images/podcasts.jpg";
import clipboard from "../images/clipboard.PNG";
import accordion from "../images/accordion.PNG";
import equalizer from "../images/equalizer.PNG";
import nft from "../images/nft.PNG";
import gallery from "../images/artgallery.jpg";
import skilled from "../images/skilled.PNG";
import order from "../images/order.PNG";
import task5 from "../images/task5.PNG";
import task4 from "../images/task4.PNG";
import task3 from "../images/task3.PNG";
import colab1 from "../images/preview.jpg";
import colab2 from "../images/display.png";
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
        image={advice}
        name="advice generator"
        link="https://ninokvakhadze.github.io/advice-generator-app/"
        link2 = "https://github.com/ninokvakhadze/advice-generator-app"
      />
         <Project
        image={countdown}
        name="Launch countdown timer"
        link="https://launch-coundown-timer.vercel.app/"
        link2 = "https://github.com/ninokvakhadze/launch-coundown-timer"
      />
        <Project
        image={pod}
        name="pod request access"
        link="https://ninokvakhadze.github.io/pod-request-access-landing-page/"
        link2 = "https://github.com/ninokvakhadze/pod-request-access-landing-page"
      />
         <Project
        image={clipboard}
        name="Clipboard landing page"
        link="https://ninokvakhadze.github.io/clipboard-landing-page/"
        link2 = "https://github.com/ninokvakhadze/clipboard-landing-page"
      />
        <Project
        image={accordion}
        name="FAQ accordion card"
        link="https://faq-accordion-card-murex-nine.vercel.app/"
        link2 = "https://github.com/ninokvakhadze/Faq-accordion-card"
      />
        <Project
        image={equalizer}
        name="Equalizer landing page"
        link="https://ninokvakhadze.github.io/equalizer-landing-page/"
        link2 = "https://github.com/ninokvakhadze/equalizer-landing-page"
      />
         <Project
        image={nft}
        name="NFT"
        link="https://nft-pied-eight.vercel.app/"
        link2 = "https://github.com/ninokvakhadze/NFT"
      />
        <Project
        image={gallery}
        name="Art Gallery"
        link="https://ninokvakhadze.github.io/art-gallery/"
        link2 = "https://github.com/ninokvakhadze/art-gallery"
      />
         <Project
        image={skilled}
        name="Skilled elearning"
        link="https://ninokvakhadze.github.io/skilled-elearning-landing-page/"
        link2 = "https://github.com/ninokvakhadze/skilled-elearning-landing-page"
      />
        <Project
        image={order}
        name="order summary"
        link="https://ninokvakhadze.github.io/order-summary-component/"
        link2 = "https://github.com/ninokvakhadze/order-summary-component"
      />
      <Project
        image={task5}
        name="Task 5"
        link="https://github.com/ninokvakhadze/task5"
        link2 = "https://github.com/ninokvakhadze/task5"
      />
         <Project
        image={task4}
        name="Task 4"
        link="https://task4-psi.vercel.app/"
        link2 = "https://github.com/ninokvakhadze/task4"
      />
        <Project
        image={task3}
        name="Task 3"
        link="https://homework3-two.vercel.app/"
        link2 = "https://github.com/ninokvakhadze/homework3"
      />
            <Project
        image={colab2}
        name="Colab 2"
        link="https://master--gorgeous-frangipane-3da090.netlify.app/"
        link2 = "https://github.com/levaniakobidze/team_3"
      />
        <Project
        image={colab1}
        name="colab-1"
        link="https://chimerical-panda-c01cba.netlify.app/home.html"
        link2 = "https://github.com/levaniakobidze/colab_007"
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
