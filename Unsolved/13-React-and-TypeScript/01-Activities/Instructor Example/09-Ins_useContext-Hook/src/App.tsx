import './App.css'
import Alert from './components/Alert';
import UserContext from './components/UserContext';

const message = 'Important Message';
const alertType = "danger"
const adminMessage = 'System Maintenance Due Soon!';

const message2 = 'Important Warning';
const alertType2 = "warning"
const adminMessage2 = 'Database Backup Due Soon!';

const userName1 = 'John Smith';
const userCredentials1 = 'Admin';

function App() {
  return (
    <UserContext.Provider value = {{ userName: userName1, userCredentials: userCredentials1 }} >
      <Alert alertType={alertType} message={message} adminMessage={adminMessage} />
      <Alert alertType={alertType2} message={message2} adminMessage={adminMessage2} />
    </UserContext.Provider>
  );
};

export default App;
