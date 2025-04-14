import React from "react";
import "./PokemonCard.css";

function PokemonCard({ id, name, type, image, onClick, isTwoGrid }) {
  const paddedId = id.toString().padStart(4, "0");

  return (
    <div
      className={`pokemon-card ${isTwoGrid ? "two-grid" : "one-grid"}`}
      onClick={onClick}
    >
      <div className="card-header">
        <span className="type">{type}</span>
        <span className="id">{paddedId}</span>
      </div>

      <div className="card-content">
        <img className="pokemon-image" src={image} alt={name} />
        <div className="pokemon-name">{name}</div>
      </div>
    </div>
  );
}

export default PokemonCard;