import validator from 'validator';

console.log(validator.isEmail('username@mycompany.com')); // true

console.log(validator.isEmail('mycompany.com')); // false
