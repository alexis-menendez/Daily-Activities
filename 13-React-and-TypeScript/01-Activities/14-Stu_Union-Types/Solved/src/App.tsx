import './App.css';

function App() {
  const arr1: number[] = [1, 8, 3, 9, 2];
  const arr2: string[] = ['yo-yo', 'jawbreaker', 'apple', 'quick'];
  const str: string = 'Hello, world';
  const num: number = 42;

  // Function to find the rightmost value in an array, string, or number
  function findRightMostValue(input: number[] | string[] | string | number): number | string {
    // If the input is an array or string, return the last element or character in the array or string using the index of the last element
    if(Array.isArray(input) || typeof input === 'string') {
      return input[input.length - 1];
    }
    // If the input is a number, return the last digit of the number using the remainder operator
    if(typeof input === 'number') {
      const lastDigit = input % 10;
      return lastDigit;
    }
    // If the input is not an array, string, or number, return an empty string
    return '';
  }

  return (
    <>
      <h2><code>{`const arr1: number[] =  [${arr1}];`}</code></h2>
      <p>{`The right most value is ${findRightMostValue(arr1)}.`}</p>
      <h2><code>{`const arr2: string[] =  [${arr2}];`}</code></h2>
      <p>{`The right most value is ${findRightMostValue(arr2)}.`}</p>
      <h2><code>{`const str: string = '${str}';`}</code></h2>
      <p>{`The right most value is ${findRightMostValue(str)}.`}</p>
      <h2><code>{`const num: number =  ${num};`}</code></h2>
      <p>{`The right most value is ${findRightMostValue(num)}.`}</p>
    </>
  )
}

export default App;
