// TODO: Integrate the WeatherContext component into the App component below.

import './App.css'
import Alert from './components/Alert';

const message = 'Important Message';
const alertType = "danger"
const adminMessage = 'System Maintenance Due Soon!';

const message2 = 'Important Warning';
const alertType2 = "warning"
const adminMessage2 = 'Database Backup Due Soon!';

function App() {
  return (
    <Alert alertType={alertType} message={message} adminMessage={adminMessage} />
    <Alert alertType={alertType2} message={message2} adminMessage={adminMessage2} />
  );
};

export default App;
