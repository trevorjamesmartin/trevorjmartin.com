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
import projectList from "./projects.json";
const Projects = (props) => {
  const [selected, setSelected] = useState({
    key: undefined,
    opened: undefined,
  });
  const selectCard = (key) => {
    selected.opened === undefined && setSelected({ key });
  };
  const toggleOpen = (key) => {
    if (selected.key === key) {
      if (selected.opened === key) {
        setSelected({ key: undefined, opened: undefined }); // close card
      } else {
        setSelected({ ...selected, opened: key }); // select and open
      }
    }
  };
  const renderCard = (
    {
      title: cardTitle,
      thumb: imgURL,
      alt: altTag,
      desc: cardDesc,
      hosted: hostedURL,
      source: sourceURL,
      portrait: portraitMode,
      tldr,
    },
    i
  ) => (
    <Card
      key={i}
      cardTitle={cardTitle}
      imgURL={imgURL}
      altTag={altTag}
      cardDesc={cardDesc}
      selectCard={() => selectCard(i)}
      isSelected={selected.key === i}
      cardNumber={i}
      hostedURL={hostedURL}
      sourceURL={sourceURL}
      portraitMode={portraitMode ? portraitMode : false}
      toggleOpen={() => toggleOpen(i)}
      isOpen={selected.opened === i}
      tldr={tldr || undefined}
    />
  );
  const cards = projectList.map((p, i) => renderCard(p, i));
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
      <CardTable cards={cards} cardState={selected}></CardTable>
    </div>
  );
};

export default Projects;
