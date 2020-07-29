import React from "react";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faPython,
  faHtml5,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import { GithubCards } from "nifty-components";

import projectList from "./projects.json";
const Projects = (props) => {
  // console.log("props", props);
  const {
    primary,
    primaryVariant,
    secondary,
    secondaryVariant,
  } = props.palette;
  const palette = {
    colorOne: primary,
    colorTwo: primaryVariant,
    colorThree: secondary,
    colorFour: secondaryVariant,
  };
  // console.log({ primary, primaryVariant, secondary, secondaryVariant });
  return (
    <div className="page">
      <h1>
        <FontAwesomeIcon icon={faLinux} alt="Projects" />
        <FontAwesomeIcon icon={faPython} alt="Projects" />
        <FontAwesomeIcon icon={faReact} alt="Projects" />
        <FontAwesomeIcon icon={faJs} alt="Projects" />
        <FontAwesomeIcon icon={faHtml5} alt="Projects" />
      </h1>
      <FontAwesomeIcon icon={faCat} />
      {props.text}
      <GithubCards
        width="55ch"
        projectlist={projectList}
        palette={palette}
        borderColorSelected={props.active_theme.primary}
        borderColorNormal={props.active_theme.background}
        backgroundColor={props.active_theme.background}
        textColor={props.active_theme.onBackground}
        titleColor={props.active_theme.onBackground}
      />
    </div>
  );
};

export default Projects;
