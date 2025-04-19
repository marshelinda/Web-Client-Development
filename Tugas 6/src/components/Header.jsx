// components/Header.jsx
import React, { useState, useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import logo from "../assets/pokemon-logo.png"; // pastikan path logo sesuai
import "../styles/Header.css";

const Header = () => {
  const { searchTerm, setSearchTerm } = useContext(PokemonContext); // gunakan context
  const [showInput, setShowInput] = useState(false);
  const [searchValue, setSearchValue] = useState(searchTerm); // nilai awal dari searchTerm

  const handleSearchClick = () => {
    setShowInput(true);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    setSearchTerm(value); // update searchTerm di context
  };

  const handleBlur = () => {
    // Kalau input kosong, balik ke tombol search
    if (searchValue.trim() === "") {
      setShowInput(false);
    }
  };

  return (
    <header className="header">
      <img src={logo} alt="Pokemon Logo" className="logo" />

      <div className="search-area">
        {!showInput ? (
          <button className="search-button" onClick={handleSearchClick}>
            <svg
              className="search-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path
                d="M10 2a8 8 0 105.293 14.293l5.207 5.207 1.414-1.414-5.207-5.207A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z"
              />
            </svg>
          </button>
        ) : (
          <input
            type="text"
            className="search-input"
            placeholder="Search Pokémon"
            value={searchValue}
            onChange={handleChange}
            onBlur={handleBlur} // saat kehilangan fokus, balik ke icon
            autoFocus
          />
        )}
      </div>
    </header>
  );
};

export default Header;
