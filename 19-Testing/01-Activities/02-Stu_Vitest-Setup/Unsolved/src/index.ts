import Arithmetic from './arithmetic.js';

const arithmetic = new Arithmetic();

console.log(`10 + 5 = ${arithmetic.sum(10, 5)}`); 
console.log(`10 - 5 = ${arithmetic.difference(10, 5)}`); 
console.log(`10 * 5 = ${arithmetic.product(10, 5)}`); 
console.log(`10 / 5 = ${arithmetic.quotient(10, 5)}`);
