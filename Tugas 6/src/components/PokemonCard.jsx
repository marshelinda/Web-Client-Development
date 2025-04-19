import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import '../styles/PokemonCard.css';

const PokemonCard = ({ pokemon, layout }) => {
  const { setSelectedPokemon } = useContext(PokemonContext);

  const type = pokemon.types[0]?.type?.name;
  const formattedType = type ? type.charAt(0).toUpperCase() + type.slice(1).toLowerCase() : '';
  const formattedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase();
  const id = pokemon.id + 1000;

  return (
    <div className={`pokemon-card ${layout}`} onClick={() => setSelectedPokemon(pokemon)}>
      <div className="card-top">
        <span className="type">{formattedType}</span>
        <span className="id">#{id}</span>
      </div>
      <img
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
      />
      <div className="card-name">
        <p>{formattedName}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
