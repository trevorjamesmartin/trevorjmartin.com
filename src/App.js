import React, { useState, useEffect } from "react";
import { GlobalStyles } from "./GlobalStyle";
import { useSpring } from "react-spring";
import { MenuRight, MenuFull } from "./components/Menu";
import { library } from "@fortawesome/fontawesome-svg-core";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import {
  faBars,
  faHome,
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons"; //"check-square" and "coffee"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { Route } from "react-router-dom";
import LoadPalette from "./colors/colorHunt";
library.add(faHome, faArrowCircleLeft, faArrowCircleRight);

export default function App() {
  const [colors, setColors] = useState({});
  const [theme, setTheme] = useState(192064);
  const [fullMenuVisible, setFullMenuVisible] = useState(false);
  const fullMenuAnimation = useSpring({
    opacity: fullMenuVisible ? 1 : 0,
    transform: fullMenuVisible ? `translateY(0)` : `translateY(-100%)`,
  });

  useEffect(
    (colors) => {
      const n = theme;
      const state = colors;
      const setState = setColors;
      LoadPalette({
        n,
        state,
        setState,
      });
    },
    [theme]
  );

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
        <GlobalStyles {...colors[theme]} />
      </div>
    </div>
  );
}
