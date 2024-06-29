export const fetchCharacters = async (name: string, gender: string) => {
  try {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${name}&gender=${gender}`
    );

    const data = await res.json();

    if (res.status === 200) {
      return data.results || [];
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
