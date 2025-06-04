import './App.css'
import Alert from './components/Alert';
import Alert2 from './components/Alert2';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';

const message = 'Important Message';
const alertType = "danger"

const message2 = 'Important Warning';
const alertType2 = "warning"

function App() {

  return (
    <>
      <h2>TypeScript React Props and State</h2>
      <div className="card">
        <Counter />
        <Counter2 />
        <Alert alertType={alertType} message={message} />
        <Alert2 alertType={alertType2} message={message2} />
      </div>
    </>
  )
}

export default App
