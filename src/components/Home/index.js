import React from "react";
import { useHistory } from "react-router-dom";

// import { themeColors } from "../../GlobalStyle";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageRef from "../PageRef";
import "./home.css";
const Home = (props) => {
  const pageRefProps = {
    history: useHistory(),
    hovercolor: props.palette.colorTwo,
    normalcolor: props.palette.colorOne,
    globalStyle: { maxWidth: "40ch" },
  };
  return (
    <div className="page">
      <h1>
        <FontAwesomeIcon icon="home" alt="Home" />
      </h1>
      <FontAwesomeIcon icon={faCat} />
      {props.text}
      <div className="hello-world">
        <h1>Hello, I'm Trevor Martin.</h1>
        <h2>I'm a full stack web engineer</h2>
        <div className="hello-links">
          <PageRef
            name="projects"
            url="/projects"
            text="Why not peruse some open source projects I've worked on."
            {...pageRefProps}
          />
          <PageRef
            name="about"
            url="/about"
            text="Or find out more about me."
            {...pageRefProps}
          />
          <br />{" "}
          {/* why does the shadow above depend on some element being here? */}
        </div>
      </div>
    </div>
  );
};

export default Home;
