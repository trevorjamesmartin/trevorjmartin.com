import React from "react";
import "./card.css";
const Card = (props) => {
  return (
    <div className="card">
      <h2>Card</h2>
      <h3>title</h3>
      <img src="https://placekitten.com/150/77" alt="placeholder"></img>
      <p>description</p>
    </div>
  );
};

const CardTable = ({ cards }) => {
  return <div className="card-table">{cards}</div>;
};

export { CardTable, Card };
