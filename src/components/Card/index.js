import React, { useState } from "react";
import { themeColors } from "../../GlobalStyle";
import { animated, useSpring } from "react-spring";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./card.css";
const Card = ({
  imgURL,
  altTag,
  cardTitle,
  cardDesc,
  selectCard,
  isSelected,
  isOpen,
  cardNumber,
  portraitMode,
  toggleOpen,
  hostedURL,
  sourceURL,
  tldr,
}) => {
  const [linkState, setLinkState] = useState({ url: undefined });
  const snackbar = useSpring({
    opacity: isSelected ? 1 : 0,
    transform: isOpen ? `translateY(0%)` : `translateY(100%)`,
  });
  return (
    <animated.div
      style={isOpen ? snackbar : { overflow: "hidden" }}
      className={
        isOpen
          ? "card-open card-selected"
          : isSelected
          ? "card card-selected"
          : "card"
      }
      onMouseOver={() => selectCard(cardNumber)}
      onClick={() => toggleOpen(cardNumber)}
    >
      <h3>{cardTitle || "Project"}</h3>
      <img
        className={
          portraitMode && isOpen
            ? "card-img-open"
            : portraitMode
            ? "card-img-portrait"
            : isOpen
            ? "card-img-open"
            : "card-img"
        }
        src={imgURL || "https://placekitten.com/150/77"}
        alt={altTag || "placeholder"}
      ></img>
      <p>{cardDesc || ""}</p>
      <div
        className="card-details"
        style={isOpen ? { display: "block" } : { display: "none" }}
      >
        <span className="card-links">
          <a
            href={sourceURL}
            alt="source code"
            target="_blank"
            rel="noopener noreferrer"
            onMouseOver={() => setLinkState({ url: sourceURL })}
            onMouseLeave={() => setLinkState({ url: undefined })}
          >
            <FontAwesomeIcon
              icon={faGithub}
              color={
                linkState.url === sourceURL
                  ? themeColors.colorFour
                  : themeColors.colorTwo
              }
            />
          </a>
          <a
            href={hostedURL}
            alt="web application"
            target="_blank"
            rel="noopener noreferrer"
            onMouseOver={() => setLinkState({ url: hostedURL })}
            onMouseLeave={() => setLinkState({ url: undefined })}
          >
            <FontAwesomeIcon
              icon={faGlobe}
              color={
                linkState.url === hostedURL
                  ? themeColors.colorFour
                  : themeColors.colorTwo
              }
            />
          </a>
        </span>
        <h3>About this project</h3>
        <div className="div-project-summary">
          <p className="card-project-summary">
            {tldr
              ? tldr
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis mollis libero, et molestie mauris. Cras eu turpis at eros blandit tempus sed ac arcu. Aliquam sit amet leo sit amet nulla laoreet accumsan vel ac dolor. Nulla vel laoreet ex, ut viverra tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce vel tincidunt metus, in tempor arcu. Maecenas sollicitudin mollis purus in luctus. Sed lorem lorem, elementum sit amet venenatis vitae, viverra non nisl."}
          </p>
        </div>
      </div>
    </animated.div>
  );
};

const CardTable = ({ cards, cardState }) => {
  return <div className="card-table">{cards}</div>;
};

export { CardTable, Card };
