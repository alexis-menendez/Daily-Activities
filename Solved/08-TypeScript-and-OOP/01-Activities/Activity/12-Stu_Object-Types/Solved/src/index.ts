const cat: {
  // properties are separated by semicolons or commas
  name: string;
  age: number;
  pattern: string;
  // optional properties are marked with a question mark
  isSleepy?: boolean;
  // arrays are defined with square brackets
  siblings?: string[];
} = {
  name: 'Whiskers',
  age: 2,
  pattern: 'Tabby',
  isSleepy: true,
  siblings: ['Slinky', 'Salem'],
};

console.log(cat);

// if the cat has siblings, log each one
if (cat.siblings) {
  for (const sibling of cat.siblings) {
    console.log(sibling);
  }
}
