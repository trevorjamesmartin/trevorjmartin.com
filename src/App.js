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
import { makeTheme, activeTheme, starterTheme } from "./themeMaker";
library.add(faHome, faArrowCircleLeft, faArrowCircleRight);

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
  const [localTheme, setLocalTheme] = useState({ ...JSON.parse(starterTheme) });
  const location = useLocation();
  const transitions = useTransition(
    location,
    (location) => location.pathname,
    fadeIn
  );
  // local storage
  const [appTheme, setAppTheme] = useStateWithLocalStorage(
    "theme",
    starterTheme
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
      const palette = palettes.find((pal) => pal.id === context_id); // find palettte by id
      // console.log("set theme!", palette, localTheme);
      const c = parsePalette(palette); // read colors into JSON
      const { light_mode, dark_mode } = makeTheme(JSON.parse(palette.colors)); // mix colors with bases
      // console.log(
      //   `options: ${theme_options} light: ${JSON.stringify(
      //     light_mode
      //   )}\ndark: ${JSON.stringify(dark_mode)}`
      // );
      const theme_options = JSON.parse(appTheme).theme_options; // saved options
      // const theme_options = localTheme.theme_options;
      // console.log("options", theme_options);
      const active_theme = activeTheme({
        theme_options,
        light_mode,
        dark_mode,
      });
      const newTheme = {
        light_mode,
        dark_mode,
        active_theme,
        theme_options,
      }; //
      if (c) {
        const lt = {
          ...newTheme,
          context_id,
          palette: c,
        };

        // console.log(JSON.stringify(lt));
        setLocalTheme(lt); // set state
        setAppTheme(JSON.stringify(lt)); // set local storage
        // }
        // inject
        // console.log(appTheme);
        // document.body.style.backgroundColor = appTheme.activeTheme.background;
        // document.body.style.color = appTheme.activeTheme.onBackground;
      }
      document.body.style.backgroundColor = localTheme.active_theme.background;
      document.body.style.color = localTheme.active_theme.onBackground;
      return true;
    },
    [
      // localTheme.theme_options,
      appTheme,
      setAppTheme,
      localTheme.active_theme.onBackground,
      localTheme.active_theme.background,
    ]
  );
  const routeStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  };
  const updateVersion = useCallback(
    (localTheme) => {
      setAppTheme(JSON.stringify(localTheme));
    },
    [setAppTheme]
  );
  const toggleDarkMode = () => {
    console.log("toggle dark mode");
    const [ltm, ...opts] = localTheme.theme_options.split(",");
    const theme_options = [`${ltm === "a" ? "b" : "a"}`, ...opts].join(",");
    console.log(theme_options);
    // setLocalTheme({...localTheme, theme_options })
    const updated = { ...localTheme, theme_options };
    setLocalTheme(updated);
    setAppTheme(JSON.stringify(updated));
  };
  useEffect(() => {
    // console.log("use-effect");
    const oldStore = localStorage.getItem("theme", false);
    let oldTheme = undefined;
    if (oldStore) {
      console.log("theme data found... loading");
      try {
        oldTheme = JSON.parse(localStorage.getItem("theme", false));
        console.log("loaded old theme", oldTheme);
      } catch {
        oldTheme = {};
      }
      // console.log("old theme, ", oldTheme);
      // console.log("new", localTheme);
      if (oldTheme.context_id !== localTheme.context_id) {
        console.log("versions differ, updating storage...");
        // update format
        updateVersion();
        // console.log("updated", localTheme.context_id);
        const merged = { ...localTheme, ...oldTheme };
        setAppTheme(JSON.stringify(merged));
        const theme = merged.active_theme;
        document.body.style.backgroundColor = theme.background;
        document.body.style.color = theme.onBackground;
      } else {
        console.log("versions match, updating body background");
        document.body.style.backgroundColor =
          localTheme.active_theme.background;
        document.body.style.color = localTheme.active_theme.onBackground;
      }
    }
    const t = JSON.parse(appTheme);
    // console.log(t);
    setTheme(t.context_id);
  }, [appTheme, setTheme, updateVersion, localTheme.version]);
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
        <MenuLeft {...localTheme} toggleDarkMode={toggleDarkMode} />
        <MenuFull
          {...localTheme}
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
                    <About text="About" {...localTheme} />
                  </div>
                )}
              />
              <Route
                path="/readme"
                component={() => (
                  <div style={routeStyle}>
                    <ReadMe
                      repoURL="https://github.com/debauchery1st/debauchery1st"
                      {...localTheme}
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
                      {...localTheme}
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
                      {...localTheme}
                    />
                  </div>
                )}
              />
              <Route
                path="/projects"
                component={() => (
                  <div style={routeStyle}>
                    <Projects text="Projects" {...localTheme} />
                  </div>
                )}
              />
              <Route
                exact
                path="/"
                component={() => (
                  <div style={routeStyle}>
                    <Home text="Home" {...localTheme} />
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
