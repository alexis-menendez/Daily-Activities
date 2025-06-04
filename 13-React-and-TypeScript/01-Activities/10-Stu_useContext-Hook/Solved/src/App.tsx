import './App.css'
import Alert from './components/Alert';
import WeatherContext from './components/WeatherContext';

const message = 'Important Message';
const alertType = "danger"
const adminMessage = 'System Maintenance Due Soon!';

const message2 = 'Important Warning';
const alertType2 = "warning"
const adminMessage2 = 'Database Backup Due Soon!';

const city1 = 'Fargo, North Dakota';
const temp1 = 15;
const tempUnits1 = 'Fahrenheit';
const conditions1 = 'Windy with Heavy Snow';

function App() {
  return (
    <WeatherContext.Provider value = {{ city: city1, temperature: temp1, temperatureUnits: tempUnits1, conditions: conditions1 }} >
      <Alert alertType={alertType} message={message} adminMessage={adminMessage} />
      <Alert alertType={alertType2} message={message2} adminMessage={adminMessage2} />
    </WeatherContext.Provider>
  );
};

export default App;
