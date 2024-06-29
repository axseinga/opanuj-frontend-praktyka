export const fetchCountriesByName = async (name: string) => {
  try {
    const res = await fetch(
      `${
        import.meta.env.VITE_COUNTRIES_API_URL
      }/name/${name}?fields=name,capital,flags,population`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await res.json();
    if (res.status === 200) {
      return data;
    } 
  } catch (err) {
    console.error(err);
  }
};
