import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import PokemonCard from "./PokemonCard";
import "../styles/PokemonList.css";

const PokemonList = () => {
  const { pokemons, layout, setLayout, sortBy, setSortBy, searchTerm } =
    useContext(PokemonContext);

  const pokemonTypes = [
    "grass",
    "fire",
    "water",
    "bug",
    "normal",
  ];

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleLayoutChange = (layoutType) => {
    setLayout(layoutType);
  };

  const filteredPokemons = pokemons.filter((pokemon) => {
    const matchesSearch = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());

    if (sortBy !== "default" && sortBy !== "id" && sortBy !== "name") {
      const hasType = pokemon.types.some((type) => type.type.name === sortBy);
      return matchesSearch && hasType;
    }

    return matchesSearch;
  });

  const sortedPokemons = [...filteredPokemons].sort((a, b) => {
    if (sortBy === "id") {
      return a.id - b.id; 
    } else if (sortBy === "name") {
      return a.name.localeCompare(b.name); 
    }
    return 0; 
  });

  return (
    <div className="pokemon-list-container">
      <div className="pokemon-list-controls">
        <select
          className="sort-select"
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="default">Sort by</option>
          <option value="id">ID</option>
          <option value="name">Name</option>

          {pokemonTypes.map((type) => (
            <option key={type} value={type}>
              Type: {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>

        <div className="grid-toggle-box">
          <button
            className={`grid-toggle-button ${layout === "one" ? "active" : ""}`}
            onClick={() => handleLayoutChange("one")}
            aria-label="One Grid"
          >
            ◼
          </button>
          <button
            className={`grid-toggle-button ${layout === "two" ? "active" : ""}`}
            onClick={() => handleLayoutChange("two")}
            aria-label="Two Grid"
          >
            <div className="two-grid-icon">
              <div />
              <div />
              <div />
              <div />
            </div>
          </button>
        </div>
      </div>

      <div className={`pokemon-list ${layout}`}>
        {sortedPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} layout={layout} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
