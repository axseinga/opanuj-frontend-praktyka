export type searchResultsT = {
  capital: string[];
  flags: { alt: string; png: string; svg: string };
  name: {
    common: string;
    official: string;
    nativeName: string;
  };
  population: number;
};
