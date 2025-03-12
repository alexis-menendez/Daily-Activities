import './App.css';

function App() {
  const arr1: number[] = [1, 8, 3, 9, 2];
  const arr2: string[] = ['yo-yo', 'jawbreaker', 'apple', 'quick'];
  const str: string = 'Hello, world';
  const num: number = 42;

  // TODO: Create a function that takes an array of numbers or strings, a string, or a number as an argument and returns the right most element of the array or string or the last digit of the number.
  // TODO: use union types instead of any.
  function findRightMostValue(input: any) {
    console.log(input);
    return '. . ';
  }

  return (
    <>
      <h2><code>{`const arr1: number[] =  [${arr1}];`}</code></h2>
      {/* should be 2 */}
      <p>{`The right most value is ${findRightMostValue(arr1)}.`}</p>
      <h2><code>{`const arr2: string[] =  [${arr2}];`}</code></h2>
      {/* should be 'quick' */}
      <p>{`The right most value is ${findRightMostValue(arr2)}.`}</p>
      <h2><code>{`const str: string =  '${str}';`}</code></h2>
      {/* should be 'd' */}
      <p>{`The right most value is ${findRightMostValue(str)}.`}</p>
      <h2><code>{`const num: number =  ${num};`}</code></h2>
      {/* should be 2 */}
      <p>{`The right most value is ${findRightMostValue(num)}.`}</p>
    </>
  )
}

export default App;
