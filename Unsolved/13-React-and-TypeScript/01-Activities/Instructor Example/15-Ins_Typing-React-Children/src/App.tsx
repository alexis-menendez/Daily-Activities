import './App.css';
import { useState } from 'react';

import CountHeader from './components/CountHeader';
import CountTitle from './components/CountTitle';
import CountDisplay from './components/CountDisplay';

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CountHeader>
        <CountTitle />
      </CountHeader>
      <CountDisplay>
        {count}
      </CountDisplay>
      <button style={{margin: "5px"}} onClick={() => setCount(count + 1)}>Increment</button>
      <button style={{margin: "5px"}} onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}
