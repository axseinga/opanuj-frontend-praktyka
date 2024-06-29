import { searchResultsT } from './types';

export const sortCountriesFn = (array: searchResultsT[], order: string) => {
  return array.sort((a, b) => {
    let factorA;
    let factorB;
    let sortOption: string;
    if (order === 'nameAsc' || order === 'nameDesc') {
      factorA = a.name.common.toLowerCase();
      factorB = b.name.common.toLowerCase();
      sortOption = 'nameAsc';
    } else {
      factorA = Number(a.population);
      factorB = Number(b.population);
      sortOption = 'populationAsc';
    }

    if (factorA < factorB) return order === sortOption ? -1 : 1;
    if (factorA > factorB) return order === sortOption ? 1 : -1;
    return 0;
  });
};
