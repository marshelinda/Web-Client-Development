// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PokemonProvider } from "./context/PokemonContext.jsx";
import "../src/styles/App.css";

// Ganti "app" dengan "root"
ReactDOM.createRoot(document.getElementById("root")).render(
  <PokemonProvider>
    <App />
  </PokemonProvider>
);
