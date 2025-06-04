const dog1: {
  // Properties are separated by semicolons
  name: string;
  age: number;
  breed: string;
  // Optional properties are marked with a question mark
  isHungry?: boolean;
  siblingCount?: number;
} = {
  name: 'Gryphon',
  // Properties must be of the correct type in order to transpile
  age: 1 /* If instead this was "1" tsc would throw an error: index.ts:8:5 - error TS2322: Type 'string' is not assignable to type 'number'. */,
  breed: 'Corgi',
  isHungry: true,
  siblingCount: 2,
};

const dog2: {
  name: string;
  age: number;
  breed: string;
  isHungry?: boolean;
  siblingCount?: number;
} = {
  name: 'Fido',
  age: 3,
  breed: 'Golden Retriever',
  // isHungry is not defined since it is optional
  // siblingCount is not defined since it is optional
};

console.log(dog1); // { name: 'Gryphon', age: 1, breed: 'Corgi', isHungry: true }

console.log(dog1.name); // Gryphon
console.log(dog1.age); // 1
console.log(dog1.breed); // Corgi

console.log(dog1.isHungry); // true
console.log(dog2.isHungry); // undefined

if (dog1.siblingCount && dog2.siblingCount) {
  console.log(dog1.siblingCount + dog2.siblingCount); // Will throw an error if siblingCount is not defined for either dog, so we must check that both have siblingCount defined before using it this way. We have used type guards to ensure that siblingCount is defined for both dogs before adding them together.
}
