import React, { useState, useEffect, useCallback } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import { useSpring, useTransition, animated } from "react-spring";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faHome,
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons"; //"check-square" and "coffee"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import palettes from "./theme/palettes.json";
import parsePalette from "./theme/parsePalette";

import { MenuLeft, MenuFull } from "./components/Menu";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ReadMe from "./components/ReadMe";
import useStateWithLocalStorage from "./hooks/useStateWithLocalStorage";
import PalettePicker from "./components/palettePicker";

import "./App.css";

library.add(faHome, faArrowCircleLeft, faArrowCircleRight);
const defaultTheme = JSON.stringify({
  context_id: 0,
  palette: {
    colorOne: "#7c3c21",
    colorTwo: "#ec823a",
    colorThree: "#f9c49a",
    colorFour: "#e8e4e1",
  },
  theme_options: "a",
});

// const rightToLeft = {
//   from: { opacity: 0, transform: "translate3d(100vw, 0, 0)" },
//   enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
//   leave: { opacity: 0, transform: "translate3d(-20vw, 0, 0)" },
// };
// const leftToRight = {
//   from: { opacity: 0, transform: "translate3d(-100vw, 0, 0)" },
//   enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
//   leave: { opacity: 0, transform: "translate3d(20vw, 0, 0)" },
// };

const fadeIn = {
  from: { opacity: 0, transform: "translate(0, 0, 0)", trail: 10 },
  enter: { opacity: 1, transform: "translate(0, 0, 0)", trail: 10 },
  leave: { opacity: 0, transform: "translate(0, 0, 0)", trail: 10 },
  config: { duration: 1234 },
};
export default function App() {
  const location = useLocation();
  const transitions = useTransition(
    location,
    (location) => location.pathname,
    fadeIn
  );
  // local storage
  const [appTheme, setAppTheme] = useStateWithLocalStorage(
    "theme",
    defaultTheme
  );
  // springs
  const [fullMenuVisible, setFullMenuVisible] = useState(false);
  const fullMenuAnimation = useSpring({
    opacity: fullMenuVisible ? 1 : 0,
    transform: fullMenuVisible ? `translateY(0)` : `translateY(-100%)`,
  });
  // console.log(location);
  const setTheme = useCallback(
    (context_id) => {
      const newTheme = JSON.parse(appTheme);
      const c = parsePalette(palettes.find((pal) => pal.id === context_id));
      if (c) {
        setAppTheme(
          JSON.stringify({
            context_id,
            palette: c,
            theme_options: newTheme.theme_options,
          })
        );
      }
      return true;
    },
    [appTheme, setAppTheme]
  );

  useEffect(() => {
    const t = JSON.parse(appTheme);
    if (!t.context_id) {
      setTheme(t.context_id);
    }
  }, [appTheme, setTheme]);
  // const defaultProps = {...JSON.parse(appTheme)}
  return (
    <div className="App">
      <div className="nav">
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
        <MenuLeft {...JSON.parse(appTheme)} />
        <MenuFull
          {...JSON.parse(appTheme)}
          style={fullMenuAnimation}
          handleClick={() => setFullMenuVisible(!fullMenuVisible)}
        />
      </div>
      <div className="page-container">
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route
                path="/about"
                component={() => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <About text="About" {...JSON.parse(appTheme)} />
                  </div>
                )}
              />
              <Route
                path="/readme"
                component={() => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <ReadMe
                      repoURL="https://github.com/debauchery1st/debauchery1st"
                      {...JSON.parse(appTheme)}
                      style={{
                        display: "block",
                        maxWidth: "60ch",
                        textAlign: "left",
                        margin: "1rem",
                      }}
                    />
                  </div>
                )}
              />
              <Route
                path="/theme"
                component={() => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <PalettePicker
                      handleChangeTheme={setTheme}
                      context={{ palettes }}
                      {...JSON.parse(appTheme)}
                    />
                  </div>
                )}
              />
              <Route
                path="/projects"
                component={() => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Projects text="Projects" {...JSON.parse(appTheme)} />
                  </div>
                )}
              />
              <Route
                exact
                path="/"
                component={() => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Home text="Home" {...JSON.parse(appTheme)} />
                  </div>
                )}
              />
            </Switch>
          </animated.div>
        ))}
      </div>
    </div>
  );
}
