let one = 64.55;
let two = 'Howdy!';
const three = '656302';
const four = 64;
const five = false;
const six = null;
let seven;

/*

TypeScript attempts to infer the type of a variable based on the value assigned to it.

JavaScript also has a `typeof` operator that can be used to determine the type of a variable.

Insert comments below to explain what the TypeScript type of each variable would be, as well as what each type would be logged to the console by JavaScript.

For example:

let hello = 'world';

console.log(typeof hello); // Logs string, and the TypeScript type would also be string.

*/

// The TypeScript type and the JavaScript type logged would be `number`.
console.log(typeof one);

// The TypeScript type and the JavaScript type logged would be `string`.
console.log(typeof two);

// The TypeScript type would be the string '656302'. JavaScript would log `string` as the type. When using `const` in TypeScript, the type is inferred as the value assigned to the variable itself.
console.log(typeof three);

// The TypeScript type would be the number `64`. JavaScript would log `number` as the type
console.log(typeof four);

// The TypeScript type would be the boolean `false`. JavaScript would log `boolean` as the type
console.log(typeof five);

// The TypeScript type would be `null`. JavaScript would log `object` as the type
console.log(typeof six);

// The TypeScript Type would be `any`. JavaScript would log `undefined` because `seven` is not assigned a value. Also, TypeScript would generally not let you assign a variable without a value unless you explicitly set the type to `any`.
console.log(typeof seven);

// Reassigns variables
one = 'Hello!';
two = false;
seven = 23;

// The TypeScript type and the JavaScript type logged would be string.
console.log(typeof one);

// The TypeScript type and the JavaScript type logged would be boolean.
console.log(typeof two);

// The TypeScript type and the JavaScript type logged would be number.
console.log(typeof seven);
