import React, { useState } from "react";
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

const Projects = (props) => {
  const [selected, setSelected] = useState({ key: undefined });
  const selectCard = (key) => {
    console.log(key);
    setSelected({ key });
  };
  const cards = [
    <Card
      key={0}
      cardTitle="GitHub Keepers"
      imgURL="/images/keepers.gif"
      altTag="project screenshot"
      cardDesc="React, HTML, CSS"
      selectCard={selectCard}
      isSelected={selected.key === 0}
      cardNumber={0}
    />,
    <Card
      key={1}
      cardTitle="Conway's Game Of Life"
      imgURL="/images/conway.gif"
      altTag="project screenshot"
      cardDesc="React, HTML, CSS"
      selectCard={selectCard}
      isSelected={selected.key === 1}
      cardNumber={1}
    />,
    <Card
      key={2}
      cardTitle="Chuck Norris"
      imgURL="/images/chuck.png"
      altTag="project screenshot"
      cardDesc="GNU/GNOME shell extension"
      selectCard={selectCard}
      isSelected={selected.key === 1}
      cardNumber={2}
    />,
    <Card
      key={3}
      cardTitle="Replate API"
      imgURL="/images/replate.gif"
      altTag="project screenshot"
      cardDesc="RESTful API, expressJS"
      selectCard={selectCard}
      isSelected={selected.key === 1}
      cardNumber={3}
      hostedURL="https://bw-replate-1.herokuapp.com/"
      sourceURL="https://github.com/bw-replate/backend"
    />,
    <Card
      key={4}
      cardTitle="Tets"
      imgURL="/images/tets.gif"
      altTag="project screenshot"
      cardDesc="Godot"
      selectCard={selectCard}
      isSelected={selected.key === 1}
      cardNumber={4}
      hostedURL="/tets"
      sourceURL="https://github.com/debauchery1st/tets"
      portraitMode={true}
    />,
  ];
  // for (let c = cards.length; c < 12; c++) {
  //   cards.push(
  //     <Card
  //       key={c}
  //       selectCard={selectCard}
  //       isSelected={selected.key === c}
  //       cardNumber={c}
  //     />
  //   );
  // }

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
      <CardTable cards={cards}></CardTable>
    </div>
  );
};

export default Projects;
