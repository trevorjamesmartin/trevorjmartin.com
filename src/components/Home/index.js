import React from "react";
import { themeColors } from "../../GlobalStyle";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageRef from "../PageRef";
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
          <PageRef
            name="projects"
            url="/projects"
            hoverColor={themeColors.colorTwo}
            normalColor="black"
            text="Why not peruse some open source projects I've worked on."
          />

          <br />
          <br />
          <PageRef
            name="about"
            url="/about"
            hoverColor={themeColors.colorTwo}
            normalColor="black"
            text="Or find out more about me."
          />
        </ul>
      </div>
    </div>
  );
};

export default Home;
