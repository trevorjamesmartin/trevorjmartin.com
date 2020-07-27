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
        palette={props.palette}
        // borderColorSelected="whitesmoke"
        borderColorNormal={props.theme_style.backgroundColor}
        backgroundColor={props.theme_style.cardBackgroundColor}
        // backgroundColor="whitesmoke"
        // titleColor={props.theme_style.titleColor}
      />
    </div>
  );
};

export default Projects;
