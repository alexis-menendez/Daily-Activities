// fs is a Node standard library package for reading and writing files
import fs from 'fs';

// the `writeToLog` function will take in data and use it to write to a file called `log.txt`.
const writeToLog = (data) => {
  fs.writeFile('log.txt', data, (err) => {
    err ? console.error(err) : console.log('Log created!');
  });
};

// the `addFunc` function will add two values that are passed in
const addFunc = (x, y) => {
  let message;

  // This conditional validates whether the correct amount of inputs have been provided
  if (y === undefined) {
    message = 'Incorrect number of inputs provided';
    writeToLog(message);
  } else {
    const num1 = Number.parseInt(x);
    const num2 = Number.parseInt(y);
    message = `The result is ${num1 + num2}`;
    writeToLog(message);
  }
};

// call the `addFunc` passing in a number and a string.
addFunc(process.argv[2], process.argv[3]);
