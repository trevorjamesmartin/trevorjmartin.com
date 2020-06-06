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
  faHome,
  faArrowCircleLeft,
  faArrowCircleRight,
  faArrowCircleDown,
  faArrowCircleUp,
} from "@fortawesome/free-solid-svg-icons"; //"check-square" and "coffee"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { Route } from "react-router-dom";
library.add(
  faHome,
  faArrowCircleUp,
  faArrowCircleDown,
  faArrowCircleLeft,
  faArrowCircleRight
);

// const Placeholder = (props) => {
//   return <h1>{props.text}</h1>;
// };

export default function App() {
  const [rightMenuVisible, setRightMenuvisible] = useState(false);
  const [fullMenuVisible, setFullMenuVisible] = useState(false);

  const rightMenuAnimation = useSpring({
    opacity: rightMenuVisible ? 1 : 0,
    transform: rightMenuVisible ? `translateX(0)` : `translateX(100%)`,
  });

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
          <FontAwesomeIcon icon="arrow-circle-up" />
        ) : (
          <FontAwesomeIcon icon="arrow-circle-down" />
        )}
      </button>
      <button
        className={`menu-button${fullMenuVisible ? " menu-button-hidden" : ""}`}
        onClick={() => setRightMenuvisible(!rightMenuVisible)}
      >
        {rightMenuVisible ? (
          <FontAwesomeIcon icon="arrow-circle-right" />
        ) : (
          <FontAwesomeIcon icon="arrow-circle-left" />
        )}
      </button>
      <MenuRight style={rightMenuAnimation} />
      <MenuFull
        style={fullMenuAnimation}
        handleClick={() => setFullMenuVisible(!fullMenuVisible)}
      />
      <Route exact path="/" component={() => <Home text="Home" />} />
      <Route path="/about" component={() => <About text="About" />} />
      <Route path="/projects" component={() => <Projects text="Projects" />} />
      <GlobalStyle />
    </div>
  );
}
