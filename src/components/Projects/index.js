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
// import "./projects.css";
// import { Card } from "../Card";
import { ListCard, ListCardTable } from "../Card/ListCard";
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

  // console.log(cards);
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
      <ListCardTable
        style={{
          maxWidth: "42rem",
          display: "flex",
          flexDirection: "column",
          margin: "2ch",
        }}
        cards={projectList.map(
          (
            {
              title,
              thumb,
              alt,
              desc: briefdesc,
              hosted: hostedURL,
              source: sourceURL,
              portrait,
              tldr,
            },
            key
          ) =>
            ListCard({
              key: key + 1,
              title,
              briefdesc,
              cardtags: alt,
              avatar: thumb,
              tldr,
              toggleOpen: () => toggleOpen(key + 1),
              selectCard: () => selectCard(key + 1),
              isSelected: selected.key === key + 1,
              isOpen: selected.opened === key + 1,
              cardNumber: key + 1,
              palette: props.palette,
              hostedURL,
              sourceURL,
              portrait,
            })
        )}
      />
    </div>
  );
};

export default Projects;
