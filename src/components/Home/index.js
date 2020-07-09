import React from "react";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import "./home.css";
const Home = (props) => {
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
          <li>
            <NavLink style={{ letterSpacing: "1px" }} to="/projects">
              Why not peruse some open source projects I've worked on.
            </NavLink>{" "}
          </li>
          <br />
          <br />
          <li>
            <NavLink style={{ letterSpacing: "1px" }} to="/about">
              Or find out more about me.
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
