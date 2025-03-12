import { useState } from 'react';
import './App.css';

function App() {
  const [val1, setVal1] = useState<number | string>(11);
  const [val2, setVal2] = useState<number | string>('12');

  const handleVal1Change = (newVal: number | string) => {
    setVal1(newVal);
  }

  const handleVal2Change = (newVal: number | string) => {
    setVal2(newVal);
  }

  const outputString = (val1: number | string, val2: number | string): string | undefined => {
    if((typeof val1 === 'string' && typeof val2 === 'number') || (typeof val1 === 'number' && typeof val2 === 'string')) {
      return 'One of the values is a string and the other is a number, so we will get a TypeScript error if we add them together.';
    }
    if(typeof val1 === 'string' && typeof val2 === 'string') {
      return `Both values are strings, so we can concatenate them together. The result is ${val1 + val2}.`;
    }
    if(typeof val1 === 'number' && typeof val2 === 'number') {
      return `Both values are numbers, so we can add them together. The result is ${val1 + val2}.`;
    }
  }

  return (
    <>
      <h3>{outputString(val1, val2)}</h3>
      <p>{`val1: ${typeof val1} = ${val1}`}</p>
      <p>{`val2: ${typeof val2} = ${val2}`}</p>
      {typeof val1 === 'number' ? <button onClick={() => handleVal1Change(val1.toString())}>Change val1 to a string</button> : <button onClick={() => handleVal1Change(parseInt(val1))}>Change val1 to a number</button>}
      {typeof val2 === 'number' ? <button onClick={() => handleVal2Change(val2.toString())}>Change val2 to a string</button> : <button onClick={() => handleVal2Change(parseInt(val2))}>Change val2 to a number</button>}
    </>
  );
}

export default App;
