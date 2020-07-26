import React from "react";
import { NavLink } from "react-router-dom";
import { animated } from "react-spring";
import {
  faReact,
  faJs,
  faPython,
  faHtml5,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./menu.css";
export const MenuLeft = ({ style, context_id, palette, theme_options }) => (
  <animated.div
    style={{
      ...style,
      backgroundColor: palette.colorTwo,
      color: palette.colorOne,
    }}
    className="menu menu--left"
  >
    <nav>
      <ul className="menu-list menu-list--left">
        <li className="menu-list-item menu-list-item--left">
          <NavLink
            to="/"
            style={{ color: palette.colorOne }}
            activeStyle={{ color: palette.colorThree }}
            exact
          >
            <FontAwesomeIcon icon="home" alt="Home" />
          </NavLink>
        </li>
        <li className="menu-list-item menu-list-item--left">
          <NavLink
            to="/projects"
            style={{ color: palette.colorOne }}
            activeStyle={{ color: palette.colorThree }}
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
            style={{ color: palette.colorOne }}
            activeStyle={{ color: palette.colorThree }}
            exact
          >
            <FontAwesomeIcon icon={faAddressCard} alt="About" />
          </NavLink>
        </li>
        {theme_options === "cats" ? (
          <>
            <li className="menu-list-item menu-list-item--left">
              <NavLink
                to="/theme"
                style={{ color: palette.colorOne }}
                activeStyle={{ color: palette.colorThree }}
                exact
              >
                theme
              </NavLink>
            </li>
            <li className="menu-list-item menu-list-item--left">
              <NavLink
                to="/readme"
                style={{ color: palette.colorOne }}
                activeStyle={{ color: palette.colorThree }}
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
export const MenuFull = ({ style, handleClick, context_id, palette }) => (
  <animated.div
    className="menu menu--full"
    style={{
      ...style,
      backgroundColor: palette.colorTwo,
      color: palette.colorOne,
    }}
  >
    <nav>
      <ul className="menu-list menu-list--full">
        <li className="menu-list-item menu-list-item--full">
          <NavLink to="/" onClick={handleClick}>
            <FontAwesomeIcon icon="home" alt="Home" />
          </NavLink>
        </li>
        <li className="menu-list-item menu-list-item--full">
          <NavLink to="/projects" onClick={handleClick}>
            <FontAwesomeIcon icon={faLinux} alt="Projects" />
            <FontAwesomeIcon icon={faPython} alt="Projects" />
            <FontAwesomeIcon icon={faReact} alt="Projects" />
            <FontAwesomeIcon icon={faJs} alt="Projects" />
            <FontAwesomeIcon icon={faHtml5} alt="Projects" />
          </NavLink>
        </li>
        <li className="menu-list-item menu-list-item--full">
          <NavLink to="/about" onClick={handleClick}>
            <FontAwesomeIcon icon={faAddressCard} alt="About" />
          </NavLink>
        </li>
      </ul>
    </nav>
  </animated.div>
);
