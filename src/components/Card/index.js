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
}) => {
  return (
    <div
      className={isSelected ? "card card-selected" : "card"}
      onClick={() => selectCard(cardNumber)}
    >
      <h3>{cardTitle || "Project"}</h3>
      <img
        className="card-img"
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
