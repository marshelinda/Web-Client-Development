import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import PokemonCard from "./PokemonCard";
import "../styles/PokemonList.css";

const PokemonList = () => {
  const { pokemons, layout, setLayout, sortBy, setSortBy, searchTerm } =
    useContext(PokemonContext);

  // Daftar type Pokémon
  const pokemonTypes = [
    "grass",
    "fire",
    "water",
    "bug",
    "normal",
    // tambahkan tipe lainnya jika perlu
  ];

  // Fungsi untuk menangani perubahan sort
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Fungsi untuk menangani perubahan layout
  const handleLayoutChange = (layoutType) => {
    setLayout(layoutType);
  };

  // Filter Pokémon berdasarkan searchTerm dan tipe yang dipilih
  const filteredPokemons = pokemons.filter((pokemon) => {
    const matchesSearch = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());

    // Jika ada tipe yang dipilih, filter berdasarkan tipe tersebut
    if (sortBy !== "default" && sortBy !== "id" && sortBy !== "name") {
      const hasType = pokemon.types.some((type) => type.type.name === sortBy);
      return matchesSearch && hasType;
    }

    // Jika tidak ada tipe yang dipilih, hanya filter berdasarkan nama
    return matchesSearch;
  });

  // Sorting Pokémon berdasarkan ID atau Name
  const sortedPokemons = [...filteredPokemons].sort((a, b) => {
    if (sortBy === "id") {
      return a.id - b.id; // Sort berdasarkan ID
    } else if (sortBy === "name") {
      return a.name.localeCompare(b.name); // Sort berdasarkan Name
    }
    return 0; // Default sort jika tidak ada pilihan
  });

  return (
    <div className="pokemon-list-container">
      {/* Kontainer untuk tombol Sort dan Grid Toggle */}
      <div className="pokemon-list-controls">
        {/* Sort di kiri */}
        <select
          className="sort-select"
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="default">Sort by</option>
          <option value="id">ID</option>
          <option value="name">Name</option>

          {/* Opsi untuk sort berdasarkan Type */}
          {pokemonTypes.map((type) => (
            <option key={type} value={type}>
              Type: {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>

        {/* Grid toggle di kanan */}
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

      {/* Daftar Pokémon */}
      <div className={`pokemon-list ${layout}`}>
        {sortedPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} layout={layout} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
