
import React, { useState, useMemo } from "react";
import PokemonCard from "../Pokemon Card/PokemonCard";
import PokemonDetail from "../Pokemon Detail/PokemonDetail";
import "./PokemonList.css";

const pokemonData = [
  { id: "#0001", name: "Bulbasaur", type: "Grass", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" },
  { id: "#0002", name: "Ivysaur", type: "Grass", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png" },
  { id: "#0003", name: "Venusaur", type: "Grass", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png" },
  { id: "#0004", name: "Charmander", type: "Fire", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" },
  { id: "#0005", name: "Charmeleon", type: "Fire", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png" },
  { id: "#0006", name: "Charizard", type: "Fire", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" },
  { id: "#0007", name: "Squirtle", type: "Water", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" },
  { id: "#0008", name: "Wartortle", type: "Water", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png" },
  { id: "#0009", name: "Blastoise", type: "Water", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png" },
  { id: "#0010", name: "Caterpie", type: "Bug", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png" },
  { id: "#0011", name: "Metapod", type: "Bug", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png" },
  { id: "#0012", name: "Butterfree", type: "Bug", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png" },
  { id: "#0013", name: "Weedle", type: "Bug", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png" },
  { id: "#0014", name: "Kakuna", type: "Bug", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png" },
  { id: "#0015", name: "Beedrill", type: "Bug", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png" },
  { id: "#0016", name: "Pidgey", type: "Normal", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png" },
  { id: "#0017", name: "Pidgeotto", type: "Normal", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png" },
  { id: "#0018", name: "Pidgeot", type: "Normal", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png" },
  { id: "#0019", name: "Rattata", type: "Normal", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png" },
  { id: "#0020", name: "Raticate", type: "Normal", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png" },
];

function PokemonList({ searchTerm = "" }) {
  const [isTwoGrid, setIsTwoGrid] = useState(false);
  const [sortBy, setSortBy] = useState("default");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handleCardClick = async (pokemon) => {
    const numericId = parseInt(pokemon.id.replace("#", ""));
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${numericId}`);
      const data = await res.json();
      const selected = {
        ...pokemon,
        sprite: data.sprites.front_default,
        stats: data.stats,
      };
      setSelectedPokemon(selected);
    } catch (err) {
      console.error("Failed to fetch details:", err);
      setSelectedPokemon({
        ...pokemon,
        sprite: pokemon.image,
        stats: [],
      });
    }
  };

  const closeDetail = () => setSelectedPokemon(null);

  const allTypes = useMemo(() => [...new Set(pokemonData.map(p => p.type))], []);

  const filteredData = pokemonData
    .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(p => sortBy.startsWith("type:") ? p.type === sortBy.split(":")[1] : true)
    .sort((a, b) => {
      if (sortBy === "id" || sortBy === "default") {
        return parseInt(a.id.slice(1)) - parseInt(b.id.slice(1));
      } else if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

  return (
    <div className="pokemon-list-container">
      {selectedPokemon ? (
        <PokemonDetail pokemon={selectedPokemon} onClose={closeDetail} />
      ) : (
        <>
          <div className="pokemon-list-header">
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Sort by</option>
              <option value="id">ID</option>
              <option value="name">Name</option>
              {allTypes.map(type => (
                <option key={type} value={`type:${type}`}>
                  Type: {type}
                </option>
              ))}
            </select>

            <div className="grid-toggle-box">
              <button
                className={`grid-toggle-button ${!isTwoGrid ? "active" : ""}`}
                onClick={() => setIsTwoGrid(false)}
                aria-label="One grid"
              >
                ◼
              </button>
              <button
                className={`grid-toggle-button ${isTwoGrid ? "active" : ""}`}
                onClick={() => setIsTwoGrid(true)}
                aria-label="Two grid"
              >
                <div className="two-grid-icon">
                  <div /><div /><div /><div />
                </div>
              </button>
            </div>
          </div>

          <div className="pokemon-list-scrollable">
            <div className={`pokemon-list ${isTwoGrid ? "two-grid-mode" : ""}`}>
              {filteredData.map(pokemon => (
                <PokemonCard
                  key={pokemon.id}
                  {...pokemon}
                  isTwoGrid={isTwoGrid}
                  onClick={() => handleCardClick(pokemon)}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PokemonList;
