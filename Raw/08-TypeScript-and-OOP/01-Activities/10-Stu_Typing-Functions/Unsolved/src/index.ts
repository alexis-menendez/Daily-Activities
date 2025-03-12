// TODO: What type is the parameter and return value of the following function?

const welcomeGuest = (guest: string): void => {
  console.log(`Welcome ${guest}, how have you been?`);
};

welcomeGuest('James');

// TODO: What type are the parameters and return value of the following function?

const addition = (x: number, y: number): number => {
  return x + y;
};

const sum: number = addition(42, 137);
console.log(sum);

// TODO: Add the correct type for the following variable:
const optionsAvailable = [
  'Pasta',
  'Ramen',
  'Pizza',
  'Salad',
  'Quinoa',
  'Tacos',
  'Fried Rice',
  'Curry',
];

// TODO: Add the correct type for the parameter and return value in the following function:
const mealPlanner = (mealOptions) => {
  // TODO: Add the correct type for the following variable:
  const randomChoice =
    mealOptions[Math.floor(Math.random() * mealOptions.length)];

  return randomChoice;
};

// TODO: Add the correct type for the following variable:
const dinnerTonight = mealPlanner(optionsAvailable);

console.log(dinnerTonight);

// TODO: Add the type for each parameter and the return value of the following function:
const submitUser = (
  username: string,
  email: string,
  password: string,
  isAdmin: boolean,
  age: number
) => {
  const user = {
    username,
    email,
    password,
    isAdmin,
    age,
  };

  console.log(user);

  return `Thanks for signing up ${username}, we'll contact you soon!`;
};

submitUser(
  'eternalCoder42',
  'sami@email.com',
  'myUltimatePassword1980',
  false,
  27
);
