import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import "../styles/PokemonDetail.css";

const PokemonDetail = () => {
  const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext);

  if (!selectedPokemon) return null;

  const { name, sprites, stats, id } = selectedPokemon;

  const getStat = (statName) =>
    stats.find((s) => s.stat.name === statName)?.base_stat || 0;

  const health = getStat("hp");
  const attack = getStat("attack");
  const defense = getStat("defense");

  return (
    <div className="pokemon-detail-card">
      <div className="detail-header">
        <span className="pokemon-id">#{id + 1000}</span>
        <button className="back-button" onClick={() => setSelectedPokemon(null)}>
          ← Back
        </button>
      </div>

      <img
        src={sprites.other["official-artwork"].front_default}
        alt={name}
        className="pokemon-image"
      />
      <div className="pokemon-name">
        {name.charAt(0).toUpperCase() + name.slice(1)}
        <img className="mini-image" src={sprites.front_default} alt="mini" />
      </div>

      <div className="stat-card">
        <p className="stat-title">Health</p>
        <div className="progress-bar">
          <div
            className="filled"
            style={{ width: `${(health / 100) * 100}%` }}
          ></div>
        </div>
        <p className="health-value">
          <span className="health-number">{health}</span>
          <span className="health-from"> from 100</span>
        </p>

        <div className="divider"></div>

        <div className="stat-row">
          <div className="stat-box">
            <p className="label">Attack</p>
            <p className="value">{attack}</p>
          </div>
          <div className="stat-box">
            <p className="label">Defense</p>
            <p className="value">{defense}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
