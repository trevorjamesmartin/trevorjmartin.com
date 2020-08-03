import React from "react";
import { NavLink } from "react-router-dom";
import { animated } from "react-spring";
import {
  faReact,
  faJs,
  faPython,
  faHtml5,
  faLinux
} from "@fortawesome/free-brands-svg-icons";
import { faAddressCard, faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { starterTheme } from "../../themeMaker/starter";

import ToggleMode from "../ToggleMode";

import "./menu.css";

export const MenuLeft = (props) => {
  const { style, theme_options, active_theme } = props;
  const theme = active_theme || starterTheme;
  const color = theme.primary;
  const opt = theme_options ? theme_options.split(",") : ["a"];
  const active = theme.secondary;
  const backgroundColor = theme.primaryVariant;

  const toggleStyle = {
    ...props,
    position: "fixed",
    top: "4rem",
    left: "4rem",
    cursor: "pointer"
  };

  return (
    <>
      <animated.div
        style={{
          ...style,
          a: {
            backgroundColor,
            color
          },
          backgroundColor
        }}
        className="menu menu--left"
      >
        <NavLink
          to="/theme"
          style={{ color, position: "fixed", top: "4rem", left: "8.6rem" }}
          activeStyle={{ color: active }}
          exact
        >
          <FontAwesomeIcon icon={faPalette} alt="theme" />
        </NavLink>

        <ToggleMode {...props} toggleStyle={toggleStyle} />
        <nav>
          <ul className="menu-list menu-list--left">
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
                    <FontAwesomeIcon icon={faPalette} alt="color theme" />
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
    </>
  );
};
export const MenuFull = ({
  style,
  handleClick,
  theme_options: opt,
  active_theme
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
        color
      }}
    >
      <nav>
        <ul className="menu-list menu-list--full">
          <li>
            <NavLink
              to="/theme"
              style={{
                color,
                position: "fixed",
                top: "2.7rem",
                left: "2.3rem"
              }}
              onClick={handleClick}
              activeStyle={{ color: active }}
              exact
            >
              <FontAwesomeIcon icon={faPalette} alt="theme" size="2x" />
            </NavLink>
          </li>

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
