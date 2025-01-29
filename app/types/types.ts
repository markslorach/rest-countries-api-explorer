export type Country = {
  name: { 
    common: string;
    official: string;
    nativeName: Record<string, {
      official: string;
      common: string;
    }>;
  };
  capital: string[];
  region: string;
  subregion: string;
  population: number;
  flags: { png: string };
  cca3: string;
  currencies: Record<string, { name: string, symbol: string }>;
  languages: Record<string, string>;
  borders: string[];
};
