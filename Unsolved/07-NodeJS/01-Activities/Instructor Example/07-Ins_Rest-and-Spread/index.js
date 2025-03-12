// without rest
const add = (x, y) => x + y;
console.log(add(1, 2, 3, 4, 5)); // => 3

// 1. rest
const addRest = (...nums) => {
  let sum = 0;
  for (const num of nums) sum += num;
  return sum;
};

addRest(1); // => 1
addRest(3, 3); // => 6
addRest(1, 1, 4, 5); // => 11

// 2.
const howManyArgs = (...args) => {
  return `You passed ${args.length} arguments.`; // point out the template literal
};

console.log(howManyArgs(0, 1)); // You have passed 2 arguments.
console.log(howManyArgs('argument!', null, ['one', 2, 'three'], 4)); // You have passed 4 arguments.

// 1. spread
const dragons = ['Drogon', 'Viserion', 'Rhaegal'];
const weapons = ['dragonglass', ...dragons, 'wildfire']; // notice the spread operator ...dragons

console.log(weapons); // prints ["dragonglass", "Drogon", "Viserion", "Rhaegal", "wildfire"]
