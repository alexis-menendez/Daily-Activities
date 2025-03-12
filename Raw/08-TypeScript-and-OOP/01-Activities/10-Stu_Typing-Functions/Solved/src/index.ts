// The guest parameter is a string type
// The welcomeGuest function returns the void type
const welcomeGuest = (guest: string): void => {
  console.log(`Welcome ${guest}, how have you been?`);
};

welcomeGuest('James');

// The x and y parameters are a number type
// The addition function returns a number type
const addition = (x: number, y: number): number => {
  return x + y;
};

// The sum variable is a number type
const sum: number = addition(42, 137);
console.log(sum);

// The optionsAvailable variable is a string array type
const optionsAvailable: string[] = [
  'Pasta',
  'Ramen',
  'Pizza',
  'Salad',
  'Quinoa',
  'Tacos',
  'Fried Rice',
  'Curry',
];

// The mealOptions parameter is a string array type
// The mealPlanner function return a string type
const mealPlanner = (mealOptions: string[]): string => {
  // The randomChoice variable is a string type
  const randomChoice: string =
    mealOptions[Math.floor(Math.random() * mealOptions.length)];

  return randomChoice;
};

// The dinnerTonight variable is a string type
const dinnerTonight: string = mealPlanner(optionsAvailable);

console.log(dinnerTonight);

// The username, email, and password parameters are string types
// The isAdmin parameter is a boolean type
// The age parameter is a number type
// The submitUser function returns a string
const submitUser = (
  username: string,
  email: string,
  password: string,
  isAdmin: boolean,
  age: number
): string => {
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
