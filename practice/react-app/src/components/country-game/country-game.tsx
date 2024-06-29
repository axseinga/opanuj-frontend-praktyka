import React from 'react';
import './country-game.scss';
import { CountryCard } from '../country-card/country-card';
import { fetchAllCountries } from '../../services/countriesAPI';
import { getRandomNumberFromRange } from '../../utils';
import { CountryFetchItemT } from '../../types';

export const CountryGame = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [card, setCard] = React.useState<CountryFetchItemT | null>(null);
  const [userAnswer, setUserAnswer] = React.useState('');
  const [inputField, setInputField] = React.useState('');
  const [isCorrect, setIsCorrect] = React.useState<
    'correct' | 'incorrect' | ''
  >('');

  const handleAnswerCheck = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!card) return;
    const correctAnswers = [card.name.common, card.name.official];
    if (correctAnswers.includes(inputField)) {
      setIsCorrect('correct');
    } else {
      setIsCorrect('incorrect');
    }
    setInputField('');
  };

  const resetGameState = () => {
    setUserAnswer('');
    setInputField('');
    setIsCorrect('');
  };

  const handleDrawCard = async () => {
    resetGameState();
    setIsLoading(true);
    const data = await fetchAllCountries();
    if (data) {
      const randomNumber = getRandomNumberFromRange(1, data.length);
      const randomCard = data[randomNumber];
      setCard(randomCard);
    } else {
      setError(true);
    }
    setIsLoading(false);
  };

  return (
    <div className="country-game">
      <button onClick={handleDrawCard}>Draw a flag!</button>
      <p>{isCorrect !== '' && `Your answer: ${userAnswer} is ${isCorrect}.`}</p>
      <p>{isLoading ? 'Searching for a country...' : ''}</p>
      {!error ? (
        <>
          <CountryCard
            name="???"
            image={{ src: card ? card?.flags?.png : '', alt: '' }}
            displayDetails={false}
          />
          <form onSubmit={handleAnswerCheck}>
            <input
              type="text"
              value={inputField}
              onChange={(e) => {
                setInputField(e.target.value);
                setIsCorrect('');
                setUserAnswer(e.target.value);
              }}
            />
            <button type="submit" disabled={!card || inputField === ''}>
              Check my answer
            </button>
          </form>
        </>
      ) : (
        <p>Something went wrong when getting a country. Please try again.</p>
      )}
    </div>
  );
};
