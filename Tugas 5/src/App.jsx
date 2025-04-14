import "./App.css";
import { useState } from "react";
import PokemonList from "./components/Pokemon List/PokemonList";
import PokemonDetail from "./components/Pokemon Detail/PokemonDetail";
import logo from "./assets/pokemon-logo.png";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchToggle = () => setIsSearchActive(true);
  const handleSearchBlur = () => setIsSearchActive(false);
  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleCloseDetail = () => setSelectedPokemon(null);

  return (
    <div className={`app-container ${selectedPokemon ? "no-scroll" : ""}`}>
      <div className="header-container">
        <img src={logo} alt="Pokemon" className="pokemon-logo" />

        {isSearchActive ? (
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            onBlur={handleSearchBlur}
            autoFocus
            value={searchTerm}
            onChange={handleSearchChange}
          />
        ) : (
          <div className="search-icon-wrapper" onClick={handleSearchToggle}>
            <div className="search-icon" />
          </div>
        )}
      </div>

      {selectedPokemon ? (
        <PokemonDetail
          pokemon={selectedPokemon}
          onClose={handleCloseDetail}
        />
      ) : (
        <PokemonList
          onSelectPokemon={setSelectedPokemon}
          searchTerm={searchTerm}
        />
      )}
    </div>
  );
}

export default App;