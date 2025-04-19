import React, { createContext, useState, useEffect } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [layout, setLayout] = useState("one");
  const [sortBy, setSortBy] = useState("default");
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
      const data = await response.json();

      const detailedPokemons = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return await res.json();
        })
      );

      setPokemons(detailedPokemons);
    };

    fetchPokemons();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        selectedPokemon,
        setSelectedPokemon,
        layout,
        setLayout,
        sortBy,
        setSortBy,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
