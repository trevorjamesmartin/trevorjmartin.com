import React from "react";
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
}) => {
  const snackbar = useSpring({
    opacity: isSelected ? 1 : 0,
    transform: isOpen ? `translateY(0%)` : `translateY(100%)`,
  });
  return (
    <animated.div
      style={isOpen ? snackbar : {}}
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
          <a href={sourceURL}>
            <FontAwesomeIcon icon={faGithub} alt="source code" />
          </a>
          <a href={sourceURL}>
            <FontAwesomeIcon icon={faGlobe} alt="source code" />
          </a>
        </span>
      </div>
    </animated.div>
  );
};

const CardTable = ({ cards, cardState }) => {
  return <div className="card-table">{cards}</div>;
};

export { CardTable, Card };
