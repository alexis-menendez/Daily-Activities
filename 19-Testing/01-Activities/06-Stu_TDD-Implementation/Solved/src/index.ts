import Validate from './validate.js';

const validate = new Validate();

const username1 = 'abc1';
const username2 = 'username';

const password1 = 'password';
const password2 = 'Password123';

console.log(`isValidUsername() returns ${validate.isValidUsername(username1)} for ${username1}`);
console.log(`isValidUsername() returns ${validate.isValidUsername(username2)} for ${username2}`);
console.log(`isValidPassword() returns ${validate.isValidPassword(password1)} for ${password1}`);
console.log(`isValidPassword() returns ${validate.isValidPassword(password2)} for ${password2}`);
