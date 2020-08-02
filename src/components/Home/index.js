import React from "react";
import { useHistory } from "react-router-dom";

// import { themeColors } from "../../GlobalStyle";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { starterTheme } from "../../themeMaker/starter";
import PageRef from "../PageRef";
import "./home.css";
const Home = (props) => {
  const { theme_style } = props;
  const { textColor } = theme_style || {};
  // console.log("test", props);
  const pageRefProps = {
    history: useHistory(),
    hovercolor: props.active_theme ? props.active_theme.primaryVariant : "",
    normalcolor: textColor,
    globalStyle: { maxWidth: "40ch" },
    active_theme: props.active_theme || starterTheme
  };
  // console.log(props);
  return (
    <div className="page">
      <h1>
        <FontAwesomeIcon
          icon="home"
          alt="Home"
          onClick={() => props.toggleMatrix()}
        />
      </h1>
      <FontAwesomeIcon icon={faCat} onClick={() => props.toggleMatrix()} />
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
        </div>
      </div>
    </div>
  );
};

export default Home;
