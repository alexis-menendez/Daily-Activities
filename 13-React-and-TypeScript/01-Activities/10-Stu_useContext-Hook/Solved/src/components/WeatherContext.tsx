import { createContext } from 'react';

interface WeatherContextInfo {
  city: string;
  temperature: number,
  temperatureUnits: 'Celsius' | 'Fahrenheit';
  conditions: string;
};

const WeatherContext = createContext<WeatherContextInfo>({ city: '', temperature: 0, temperatureUnits: 'Fahrenheit', conditions: '' });

export default WeatherContext;
