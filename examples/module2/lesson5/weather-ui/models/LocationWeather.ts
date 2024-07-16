export enum WeatherType {
  Sunny = 'sunny',
  Cloudy = 'cloudy',
  Rainy = 'rainy',
  Snowy = 'snowy',
}

export interface DailyWeather {
  date: string;
  type: WeatherType;
  averageTemperature: number;
}

export interface DailyWeatherUS {
  date: string;
  type: WeatherType;
  average_temperature: number;
}

export interface LocationWeather {
  city: string;
  country: string;
  weatherDetails: DailyWeather[];
}

export interface LocationWeatherAPIData {
  city: string;
  country: string;
  weatherDetails: DailyWeather[] | { Weather: DailyWeatherUS[] };
}