/*
! Primitive Types in TypeScript
*/

const myStringWelcome: string = 'Hello World'; // When defining a variable, you can specify the type of data it will hold by using a colon followed by the type. This is called type annotation.
const myNumberInt: number = 100;
const isMyBoolean: boolean = true;

let myStringPassword = '865Password!2020'; // However, if you don't specify a type, TypeScript will infer the type based on the value assigned to the variable.

myStringPassword = 100; // This will throw an error in TypeScript. Specifically, Type 'number' is not assignable to type 'string'.

const myConstString = 'I am a string'; // If you use `const` to define a variable, but do not assign a type, TypeScript will infer the type as the literal value assigned to the variable.

const explicitNull: null = null;
const explicitUndefined: undefined = undefined;

// ! When using `let` to define a variable that should be null or undefined you **must** specify the type. Otherwise, TypeScript will infer the type as `any`.
let letNull: null = null;
let myNull = null;

let letUndefined: undefined = undefined;
let myUndefined = undefined;

letNull = 3; // Error: Type '3' is not assignable to type 'null'.
letUndefined = 3; // Error: Type '3' is not assignable to type 'undefined'.

myNull = 3; // No error, because myNull is of type `any`
myUndefined = 3; // No error, because myUndefined is of type `any`

/*
! Special Types in TypeScript
*/

// ? Variables that are not assigned are given the `any` type implicitly.

let myAny; // Depending on the configuration of TypeScript, this may or may not throw an error.

console.log(typeof myAny); // In JavaScript, this will still log `undefined`. The type of `any` only exists in TypeScript.

myAny = 100; // You can assign any value to a variable of type `any`.
myAny = 'Hello World';

// ! Generally in TypeScript, you would only declare a variable if you are also assigning a value. You won't see blocks of unassigned variables in most TypeScript applications.

let explicitAny: any = 'I am a string'; // Because we have explicitly declared the type as `any` our TypeScript configuration should not find issue with this.

explicitAny = 100; // Therefore, we can assign a number to the variable without an error.

// ? The `unknown` type is another special type in TypeScript that is a similar, but safer alternative to `any`.

let myUnknown: unknown;

myUnknown = 100; // You can assign any value to a variable of type `unknown`.
myUnknown = 'Hello World';

// ! However, you cannot perform operations on a variable of type `unknown` without first checking the type.
// The following throws an error in TypeScript. Specifically, `myUnknown` is of type 'unknown'.
const sum = myUnknown + 10;

if (typeof myUnknown === 'number') {
  const sum = myUnknown + 10; // No error, because we have checked the type of `myUnknown` before performing the operation.
  console.log(sum);
}

// ? Refining the type of a variable so that TypeScript can understand it is known as "narrowing".
