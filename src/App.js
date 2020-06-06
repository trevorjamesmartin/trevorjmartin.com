import React, { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import { useSpring } from "react-spring";
import { MenuRight, MenuFull } from "./components/Menu";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { free-brands-svg-icons } from "@fortawesome/fontawesome-free";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
// import { fab } from "@fortawesome/fontawesome-free"; //  all of the brand icons
import {
  faBars,
  faHome,
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons"; //"check-square" and "coffee"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { Route } from "react-router-dom";
library.add(faHome, faArrowCircleLeft, faArrowCircleRight);

// const Placeholder = (props) => {
//   return <h1>{props.text}</h1>;
// };

export default function App() {
  const [leftMenuVisible, setleftMenuVisible] = useState(true);
  const [fullMenuVisible, setFullMenuVisible] = useState(false);

  // const rightMenuAnimation = useSpring({
  //   opacity: rightMenuVisible ? 1 : 0,
  //   transform: rightMenuVisible ? `translateX(0)` : `translateX(100%)`,
  // });

  // const leftMenuAnimation = useSpring({
  //   opacity: leftMenuVisible ? 1 : 0,
  //   transform: leftMenuVisible ? `translateX(250px)` : `translateX(0)`,
  // });
  const fullMenuAnimation = useSpring({
    opacity: fullMenuVisible ? 1 : 0,
    transform: fullMenuVisible ? `translateY(0)` : `translateY(-100%)`,
  });

  return (
    <div className="App">
      <button
        className={`menu-button menu-button--full${
          fullMenuVisible ? " menu-button-active" : ""
        }`}
        onClick={() => setFullMenuVisible(!fullMenuVisible)}
      >
        {fullMenuVisible ? (
          <FontAwesomeIcon icon={faBars} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>

      <MenuRight />
      <MenuFull
        style={fullMenuAnimation}
        handleClick={() => setFullMenuVisible(!fullMenuVisible)}
      />
      <div className="page-container">
        <Route exact path="/" component={() => <Home text="Home" />} />
        <Route path="/about" component={() => <About text="About" />} />
        <Route
          path="/projects"
          component={() => <Projects text="Projects" />}
        />
        <GlobalStyle />
      </div>
    </div>
  );
}
