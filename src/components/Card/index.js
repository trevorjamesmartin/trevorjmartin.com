import React from "react";
import "./card.css";
const Card = ({
  imgURL,
  altTag,
  cardTitle,
  cardDesc,
  selectCard,
  isSelected,
  cardNumber,
  portraitMode,
  openCard,
}) => {
  return (
    <div
      className={isSelected ? "card card-selected" : "card"}
      onMouseOver={() => selectCard(cardNumber)}
      onClick={() => openCard(cardNumber)}
    >
      <h3>{cardTitle || "Project"}</h3>
      <img
        className={portraitMode ? "card-img-portrait" : "card-img"}
        src={imgURL || "https://placekitten.com/150/77"}
        alt={altTag || "placeholder"}
      ></img>
      <p>{cardDesc || ""}</p>
    </div>
  );
};

const CardTable = ({ cards }) => {
  return <div className="card-table">{cards}</div>;
};

export { CardTable, Card };
