import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import {
  faReact,
  faJs,
  faPython,
  faHtml5,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAddressCard,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { starterTheme } from "../../themeMaker/starter";

// import { RoundedToggle } from "../Toggle";
import "./menu.css";

export const MenuLeft = (props) => {
  // console.log("menuLeft1", props);
  const { style, theme_options, active_theme } = props;
  const theme = active_theme || starterTheme;
  const color = theme.primary;
  // const theme = active_theme; // || starterTheme || undefined;
  const opt = theme_options.split(",");
  // const color = theme.primary;
  const active = theme.secondary;
  const backgroundColor = theme.primaryVariant;

  // springs
  const [toggle, set] = useState(opt && opt[0] !== "a");
  const transitions = useTransition(toggle, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  useEffect(() => {
    console.log(opt);
  }, []);
  const toggleDarkMode = () => {
    set(!toggle);
    props.toggleDarkMode();
  };
  return (
    <animated.div
      style={{
        ...style,
        a: {
          backgroundColor,
          // color,
        },
        backgroundColor,
      }}
      className="menu menu--left"
    >
      <nav>
        <ul className="menu-list menu-list--left">
          <li>
            {transitions.map(({ item, key, props }) =>
              item ? (
                <animated.div style={props} onClick={toggleDarkMode}>
                  <FontAwesomeIcon icon={faSun} alt="sun" />
                </animated.div>
              ) : (
                <animated.div style={props} onClick={toggleDarkMode}>
                  <FontAwesomeIcon icon={faMoon} alt="moon" />
                </animated.div>
              )
            )}
          </li>
          <li className="menu-list-item menu-list-item--left">
            <NavLink
              to="/"
              style={{ color }}
              activeStyle={{ color: active }}
              exact
            >
              <FontAwesomeIcon icon="home" alt="Home" />
            </NavLink>
          </li>
          <li className="menu-list-item menu-list-item--left">
            <NavLink
              to="/projects"
              style={{ color }}
              activeStyle={{ color: active }}
              exact
            >
              <FontAwesomeIcon icon={faLinux} alt="Projects" />
              <FontAwesomeIcon icon={faPython} alt="Projects" />
              <FontAwesomeIcon icon={faReact} alt="Projects" />
              <FontAwesomeIcon icon={faJs} alt="Projects" />
              <FontAwesomeIcon icon={faHtml5} alt="Projects" />
            </NavLink>
          </li>
          <li className="menu-list-item menu-list-item--left">
            <NavLink
              to="/about"
              style={{ color }}
              activeStyle={{ color: active }}
              exact
            >
              <FontAwesomeIcon icon={faAddressCard} alt="About" />
            </NavLink>
          </li>
          {opt.filter((a) => a === "cats").length > 0 ? (
            <>
              <li className="menu-list-item menu-list-item--left">
                <NavLink
                  to="/theme"
                  style={{ color }}
                  activeStyle={{ color: active }}
                  exact
                >
                  theme
                </NavLink>
              </li>
              <li className="menu-list-item menu-list-item--left">
                <NavLink
                  to="/readme"
                  style={{ color }}
                  activeStyle={{ color: active }}
                  exact
                >
                  readme
                </NavLink>
              </li>
            </>
          ) : (
            ""
          )}
        </ul>
      </nav>
    </animated.div>
  );
};
export const MenuFull = ({
  style,
  handleClick,
  theme_options: opt,
  active_theme,
}) => {
  const theme = active_theme || starterTheme;
  const backgroundColor = theme.primaryVariant;
  const color = theme.primary;
  const active = theme.secondary;
  return (
    <animated.div
      className="menu menu--full"
      style={{
        ...style,
        backgroundColor,
        color,
      }}
    >
      <nav>
        <ul className="menu-list menu-list--full">
          <li className="menu-list-item menu-list-item--full">
            <NavLink
              to="/"
              onClick={handleClick}
              style={{ color }}
              activeStyle={{ color: active }}
              exact
            >
              <FontAwesomeIcon icon="home" alt="Home" />
            </NavLink>
          </li>
          <li className="menu-list-item menu-list-item--full">
            <NavLink
              to="/projects"
              onClick={handleClick}
              style={{ color }}
              activeStyle={{ color: active }}
              exact
            >
              <FontAwesomeIcon icon={faLinux} alt="Projects" />
              <FontAwesomeIcon icon={faPython} alt="Projects" />
              <FontAwesomeIcon icon={faReact} alt="Projects" />
              <FontAwesomeIcon icon={faJs} alt="Projects" />
              <FontAwesomeIcon icon={faHtml5} alt="Projects" />
            </NavLink>
          </li>
          <li className="menu-list-item menu-list-item--full">
            <NavLink
              to="/about"
              onClick={handleClick}
              style={{ color }}
              activeStyle={{ color: active }}
              exact
            >
              <FontAwesomeIcon icon={faAddressCard} alt="About" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </animated.div>
  );
};
