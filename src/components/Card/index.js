import React from "react";
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
}) => {
  return (
    <div
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
    </div>
  );
};

const CardTable = ({ cards, cardState }) => {
  return <div className="card-table">{cards}</div>;
};

export { CardTable, Card };
