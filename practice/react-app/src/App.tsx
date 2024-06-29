import React from 'react';
import './App.scss';
import { CountryFinder } from './components/country-finder/country-finder';
import { ToggleAppMode } from './components/toggle/toggle';
import { CountryGame } from './components/country-game/country-game';
import { CountryFetchItemT } from './types';

function App() {
  const [gameState, setGameState] = React.useState<boolean>(false);
  const [searchResult, setSearchResult] = React.useState<CountryFetchItemT[]>(
    []
  );

  return (
    <div className="app-wrapper">
      <h1>GuessThatFlag</h1>
      <ToggleAppMode setGameState={setGameState} />
      <div className="toggle-area">
        {!gameState ? (
          <CountryFinder
            searchResult={searchResult}
            setSearchResult={setSearchResult}
          />
        ) : (
          <CountryGame />
        )}
      </div>
    </div>
  );
}

export default App;
