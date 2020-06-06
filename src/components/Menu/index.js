import React from "react";
import { NavLink } from "react-router-dom";
import { animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./menu.css";

export const MenuRight = ({ style }) => (
  <animated.div style={style} className="menu menu--right">
    <nav>
      <ul className="menu-list menu-list--right">
        <li className="menu-list-item menu-list-item--right">
          <NavLink to="/">
            <FontAwesomeIcon icon="home" alt="Home" />
          </NavLink>
        </li>
        <li className="menu-list-item menu-list-item--right">
          <NavLink to="/Projects">Projects</NavLink>
        </li>
        <li className="menu-list-item menu-list-item--right">
          <NavLink to="/About">About</NavLink>
        </li>
      </ul>
    </nav>
  </animated.div>
);
export const MenuFull = ({ style, handleClick }) => (
  <animated.div className="menu menu--full" style={style}>
    <nav>
      <ul className="menu-list menu-list--full">
        <li className="menu-list-item menu-list-item--full">
          <NavLink to="/" onClick={handleClick}>
            <FontAwesomeIcon icon="home" alt="Home" />
          </NavLink>
        </li>
        <li className="menu-list-item menu-list-item--full">
          <NavLink to="/Projects" onClick={handleClick}>
            Projects
          </NavLink>
        </li>
        <li className="menu-list-item menu-list-item--full">
          <NavLink to="/About" onClick={handleClick}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  </animated.div>
);
