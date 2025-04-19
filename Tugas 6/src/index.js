import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PokemonProvider } from './context/PokemonContext';
import './styles/App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PokemonProvider>
    <App />
  </PokemonProvider>
);
