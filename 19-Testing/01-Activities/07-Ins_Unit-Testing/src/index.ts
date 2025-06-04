import AccountManager from './AccountManager.js';
import Validate from './validate.js';

const accountManager = new AccountManager();
const validate = new Validate();

const username1 = 'firstuser';
const password1 = 'Password123';

if (validate.isValidUsername(username1) && validate.isValidPassword(password1)) {
  accountManager.addAccount(username1);
  console.log(`${username1} successfully added.`);
}

const username2 = 'seconduser';
const password2 = 'Password456';

if (validate.isValidUsername(username2) && validate.isValidPassword(password2)) {
  accountManager.addAccount(username2);
  console.log(`${username2} successfully added.`);
}

accountManager.removeAccount(username2);
