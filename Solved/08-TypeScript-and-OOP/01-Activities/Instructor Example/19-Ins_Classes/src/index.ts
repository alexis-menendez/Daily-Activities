class Cat {
  // properties are defined as variables within the class
  name: string;
  age: number;
  pattern: string;
  isSleepy: boolean;

  constructor(name: string, age: number, pattern: string, isSleepy = false) {
    // default value for isSleepy is false if no value is provided
    this.name = name;
    this.age = age;
    this.pattern = pattern;
    this.isSleepy = isSleepy;
  }

  // methods are defined as functions within the class
  meow(): void {
    // void means the function does not return a value
    console.log(`${this.name} says meow!`);
  }

  nap(): void {
    // void means the function does not return a value
    if (this.isSleepy) {
      console.log(`${this.name} is taking a nap.`);
    } else {
      console.log(`${this.name} doesn't want to nap!`);
    }
  }
}

// call the constructor with a value for all parameters
const cat1 = new Cat('Wolpertinger', 8, 'Brown Tabby', true);
// a value for the isSleepy parameter is not provided, so it defaults to false
const cat2 = new Cat('Chupacabra', 2, 'Orange Tabby');

cat1.meow(); // Wolpertinger says meow!
cat2.meow(); // Chupacabra says meow!

cat1.nap(); // Wolpertinger is taking a nap.
cat2.nap(); // Chupacabra doesn't want to nap!
