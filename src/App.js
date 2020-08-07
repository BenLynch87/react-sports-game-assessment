import React from "react";
import "./App.css";
import Game from "./components/Game/Game";
import homeLogo from "./pancakes.png";
import awayLogo from "./waffles.png";

function App() {
  return (
    <div className="App">
      <Game
        venue="Breakfast Stadium"
        homeTeam="Pancakes"
        homeLogo={homeLogo}
        awayTeam="Waffles"
        awayLogo={awayLogo}
      />
    </div>
  );
}

export default App;
