import { useContext } from 'react';
import WeatherContext from './WeatherContext';

interface AlertProps {
  alertType: string;
  message: string;
  adminMessage: string;
};

function Alert(props: AlertProps) {
  const weatherContext = useContext(WeatherContext);
  return (
    <div className={`alert alert-${props.alertType || 'success'}`} role="alert">
      <p>{props.message}</p>
      <p>Weather Conditions for: {weatherContext.city}</p>
      <p>{weatherContext.temperature} {weatherContext.temperatureUnits}</p>
      <p>{weatherContext.conditions}</p>
    </div>
  );
}

export default Alert;
