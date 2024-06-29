import React from 'react';
import { SearchBarIcon } from '../icons/search-bar';
import './country-finder.scss';
import { fetchCountriesByName } from '../../services/countriesAPI';
import { CountryFetchItemT } from '../../types';
import { sortCountriesFn } from '../../utils';
import { CountryCard } from '../country-card/country-card';

export const CountryFinder = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const [searchResult, setSearchResult] = React.useState<CountryFetchItemT[]>(
    []
  );
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleSort = (array: CountryFetchItemT[], order: string) => {
    if (searchResult.length === 0) return;
    const sortedArray = sortCountriesFn(array, order);
    const newResult = [...sortedArray];
    setSearchResult(newResult);
  };

  const handleSearch = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const data = await fetchCountriesByName(searchValue);
    if (data) {
      setSearchResult(data);
    } else {
      setError(true);
    }
    setIsLoading(false);
  };

  return (
    <div className="country-finder">
      <form onSubmit={handleSearch} className="country-finder__form">
        <input
          type="text"
          value={searchValue}
          placeholder="Type name of the country"
          name="search"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit" disabled={searchValue === '' || isLoading}>
          <p>
            <span>Search</span>
            <SearchBarIcon />
          </p>
        </button>
      </form>
      <div className="country-finder__sorting">
        <label htmlFor="sortByName">Sort by name:</label>
        <select
          name="sortByName"
          id="sortByName"
          onChange={(e) => handleSort(searchResult, e.target.value)}
          disabled={searchResult.length <= 1}
        >
          <option value="nameDesc">Descending</option>
          <option value="nameAsc">Ascending</option>
        </select>
        <label htmlFor="sortByPopulation">Sort by population:</label>
        <select
          name="sortByPopulation"
          id="sortByPopulation"
          onChange={(e) => handleSort(searchResult, e.target.value)}
          disabled={searchResult.length <= 1}
        >
          <option value="populationDesc">Descending</option>
          <option value="populationAsc">Ascending</option>
        </select>
      </div>
      <div>
        {isLoading ? (
          <p>Loading countries...</p>
        ) : (
          searchResult.length > 0 && (
            <div className="country-finder__cards">
              {searchResult.map((card, index) => (
                <CountryCard
                  key={`Card_${card.name}_${index}`}
                  image={{
                    src: card.flags?.png ?? '',
                    alt: card.flags?.alt ?? '',
                  }}
                  name={card.name?.common ?? ''}
                  population={card.population ?? ''}
                  displayDetails
                />
              ))}
            </div>
          )
        )}
        {error && (
          <p>Someting went wrong with the search. Please try one more time.</p>
        )}
      </div>
    </div>
  );
};
