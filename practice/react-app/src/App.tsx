import React from 'react';
import './App.scss';
import { CountryFinder } from './components/country-finder/country-finder';
import { ToggleAppMode } from './components/toggle/toggle';
import { CountryCard } from './components/country-card/country-card';

function App() {
  const [gameState, setGameState] = React.useState<boolean>(false);
  const handleSubmit = () => {};

  return (
    <div className="app-wrapper">
      <h1>GuessThatFlag</h1>
      <ToggleAppMode setGameState={setGameState} />
      <div className="toggle-area">
        {!gameState ? (
          <CountryFinder />
        ) : (
          <div>
            <button>Draw a flag!</button>
            <p>correct / incorrect</p>
            {/* add placeholder when loading new one*/}
            <CountryCard name="???" image={{ src: '', alt: '' }} displayDetails={!gameState}/>
            <form onSubmit={handleSubmit}>
              <input type="text" />
              <button type="submit">Check my answer</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
