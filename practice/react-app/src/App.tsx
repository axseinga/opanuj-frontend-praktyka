import React from 'react';
import './App.scss';
import { CountryFinder } from './components/country-finder/country-finder';
import { ToggleAppMode } from './components/toggle/toggle';
import { CountryGame } from './components/country-game/country-game';

function App() {
  const [gameState, setGameState] = React.useState<boolean>(false);

  return (
    <div className="app-wrapper">
      <h1>GuessThatFlag</h1>
      <ToggleAppMode setGameState={setGameState} />
      <div className="toggle-area">
        {!gameState ? <CountryFinder /> : <CountryGame />}
      </div>
    </div>
  );
}

export default App;
