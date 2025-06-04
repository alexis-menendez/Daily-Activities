// Declare variables using let
let personName = 'Sakura';
let pets = 3;
let funFact = 'I like pineapple on my pizza.';

// Use template literals to combine data and variable names in a single console log
console.log(`My name is ${personName}.`);
console.log(`I have ${pets} pet(s).`);
console.log(`Fun fact: ${funFact}`);

// We use a `for` loop to execute code more than once
for (let i = 0; i < 5; i++) {
  // This is the block of code that will run each time
  if (i % 2 === 0){
    console.log(`${i} is even.`);
  }
  console.log(`This is the current value of i: ${i}.`);
}
