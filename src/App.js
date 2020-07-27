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
import light_base from "./theme/light_base.json";
import dark_base from "./theme/dark_base.json";
library.add(faHome, faArrowCircleLeft, faArrowCircleRight);

const light_style = {
  ...light_base,
  borderColorNormal: light_base.background || "whitesmoke",
  cardBackgroundColor: light_base.surface,
  backgroundColor: light_base.background || "whitesmoke",
  borderColorSelected: light_base.background || "whitesmoke",
  titleColor: light_base.onBackground,
  textColor: light_base.onBackground,
};
const dark_style = {
  ...dark_base,
  borderColorNormal: dark_base.background || "#2b2727",
  cardBackgroundColor: dark_base.surface || "slategrey",
  backgroundColor: dark_base.background || "#2b2727",
  borderColorSelected: dark_base.background || "#2b2727",
  titleColor: dark_base.onBackground || "white",
  textColor: dark_base.onBackground || "whitesmoke",
};

const theme_options = "b";
const theme_style = theme_options[0] === "a" ? dark_style : light_style;
const defaultTheme = JSON.stringify({
  context_id: 0,
  palette: {
    colorOne: "#7c3c21",
    colorTwo: "#ec823a",
    colorThree: "#f9c49a",
    colorFour: "#e8e4e1",
  },
  theme_options,
  theme_style,
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
  from: { opacity: 0, transform: "translate(0, 0, 0)" },
  enter: { opacity: 1, transform: "translate(0, 0, 0)" },
  leave: { opacity: 0, transform: "translate(0, 0, 0)" },
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
      const newTheme = { theme_options, theme_style, ...JSON.parse(appTheme) };
      const c = parsePalette(palettes.find((pal) => pal.id === context_id));
      if (c) {
        setAppTheme(
          JSON.stringify({
            ...newTheme,
            context_id,
            palette: c,
          })
        );
      }
      return true;
    },
    [appTheme, setAppTheme]
  );
  const routeStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  };
  useEffect(() => {
    const t = JSON.parse(appTheme);
    // const palette = JSON.parse(t.palette);
    document.body.style.backgroundColor = t.theme_style.backgroundColor;
    document.body.style.color = t.theme_style.textColor;
    // if (
    //   !t.context_id ||
    //   !t.theme_options ||
    //   !t.theme_style ||
    //   (t.theme_style && !t.theme_style.primary)
    // ) {
    setTheme(t.context_id);
    // }
  }, [appTheme, setTheme]);
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
                  <div style={routeStyle}>
                    <About text="About" {...JSON.parse(appTheme)} />
                  </div>
                )}
              />
              <Route
                path="/readme"
                component={() => (
                  <div style={routeStyle}>
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
                path="/testing"
                component={() => (
                  <div style={routeStyle}>
                    <ReadMe
                      repoURL="https://github.com/debauchery1st/trevorjmartin.com"
                      readmeURL="https://raw.githubusercontent.com/debauchery1st/trevorjmartin.com/master/src/components/README.md"
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
                  <div style={routeStyle}>
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
                  <div style={routeStyle}>
                    <Projects text="Projects" {...JSON.parse(appTheme)} />
                  </div>
                )}
              />
              <Route
                exact
                path="/"
                component={() => (
                  <div style={routeStyle}>
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
