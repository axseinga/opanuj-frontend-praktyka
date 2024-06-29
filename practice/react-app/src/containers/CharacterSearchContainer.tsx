import { useEffect, useState } from 'react';
import CharacterList from '../components/CharacterList';
import SearchForm from '../components/SearchForm';
import SearchTitle from '../components/SearchTitle';
import { Character } from '../types/Character';
import { fetchCharacters } from '../services/fetchCharacters';

function CharacterSearchContainer() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [characters, setCharacters] = useState<Character[]>([]);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (name || gender) {
        const characters = await fetchCharacters(name, gender);
        setCharacters(characters);
      }
    };

    fetchData();
  }, [name, gender]);

  useEffect(() => {
    setCharacters(characters);
  }, [sortOption, characters]);

  return (
    <>
      <div className="pt-20" />
      <SearchTitle title="Wyszukiwarka postaci Rick and Morty" />
      <div className="pt-8" />
      <SearchForm
        name={name}
        setName={setName}
        gender={gender}
        setGender={setGender}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className="pt-12" />
      <CharacterList characters={characters} />
      <div className="pt-16" />
    </>
  );
}

export default CharacterSearchContainer;
