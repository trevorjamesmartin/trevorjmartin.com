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
import "./projects.css";
import { Card, CardTable } from "../Card";
const testCards = (n) => {
  const cards = [];
  for (let card = 0; card < n; card++) {
    cards.push(<Card key={card} />);
  }
  return cards;
};

const Projects = (props) => {
  return (
    <div className="projects-page">
      <h1>
        <FontAwesomeIcon icon={faLinux} alt="Projects" />
        <FontAwesomeIcon icon={faPython} alt="Projects" />
        <FontAwesomeIcon icon={faReact} alt="Projects" />
        <FontAwesomeIcon icon={faJs} alt="Projects" />
        <FontAwesomeIcon icon={faHtml5} alt="Projects" />
      </h1>
      <FontAwesomeIcon icon={faCat} />
      {props.text}
      <CardTable cards={testCards(12)}></CardTable>
    </div>
  );
};

export default Projects;
