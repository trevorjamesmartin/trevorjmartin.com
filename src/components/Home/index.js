import React, { useState } from "react";
import { themeColors } from "../../GlobalStyle";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import "./home.css";
const Home = (props) => {
  const [linkState, setLinkState] = useState({ name: undefined });
  return (
    <div className="home-page">
      <h1>
        <FontAwesomeIcon icon="home" alt="Home" />
      </h1>
      <FontAwesomeIcon icon={faCat} />
      {props.text}
      <div className="hello-world">
        <h1>Hello, I'm Trevor Martin.</h1>
        <h2>I'm a full stack web engineer</h2>
        <br />
        <br />
        <ul>
          <li
            name="projects"
            className={
              linkState.name === "projects"
                ? "nav-link-text-selected"
                : "nav-link-text"
            }
            onMouseEnter={() => setLinkState({ name: "projects" })}
            onMouseLeave={() => setLinkState({ name: undefined })}
            style={
              linkState.name === "projects"
                ? {
                    border: `1px solid ${themeColors.colorTwo}`,
                    borderRadius: "4px",
                    padding: "1rem",
                  }
                : {
                    border: `1px solid ${themeColors.colorOne}`,
                    borderRadius: "4px",
                    padding: "1rem",
                  }
            }
          >
            <NavLink
              style={
                linkState.name === "projects"
                  ? { color: themeColors.colorTwo, letterSpacing: "1px" }
                  : { letterSpacing: "1px" }
              }
              to="/projects"
            >
              Why not peruse some open source projects I've worked on.
            </NavLink>{" "}
          </li>
          <br />
          <br />
          <li
            name="about"
            className={
              linkState.name === "about"
                ? "nav-link-text-selected"
                : "nav-link-text"
            }
            onMouseEnter={() => setLinkState({ name: "about" })}
            onMouseLeave={() => setLinkState({ name: undefined })}
            style={
              linkState.name === "about"
                ? {
                    border: `1px solid ${themeColors.colorTwo}`,
                    borderRadius: "4px",
                    padding: "1rem",
                  }
                : {
                    border: `1px solid ${themeColors.colorOne}`,
                    borderRadius: "4px",
                    padding: "1rem",
                  }
            }
          >
            <NavLink
              style={
                linkState.name === "about"
                  ? { color: themeColors.colorTwo, letterSpacing: "1px" }
                  : { letterSpacing: "1px" }
              }
              to="/about"
            >
              Or find out more about me.
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
