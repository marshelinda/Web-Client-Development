import React, { useEffect, useState, useContext } from "react";
import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";
import { PokemonContext } from "./context/PokemonContext";
import "./styles/App.css";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const { selectedPokemon } = useContext(PokemonContext);
  const [layout, setLayout] = useState("one");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        const data = await res.json();
        const detailed = await Promise.all(
          data.results.map(async (p) => {
            const res = await fetch(p.url);
            return res.json();
          })
        );
        setPokemons(detailed);
      } catch (error) {
        console.error("Gagal mengambil data Pokémon:", error);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        {!selectedPokemon ? (
          <PokemonList
            pokemons={pokemons}
            layout={layout}           
            setLayout={setLayout}     
            sortBy={sortBy}           
            setSortBy={setSortBy}     
          />
        ) : (
          <PokemonDetail />
        )}
      </div>
    </div>
  );
};

export default App;
