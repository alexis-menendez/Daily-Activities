// Typing via interfaces

interface Employee {
  name: string;
  division: string;
}

const employee: Employee = {
  name: 'Michael Williams',
  division: 'Engineering'
};

console.log(employee); // { name: 'Michael Williams', division: 'Engineering' }


// Typing via types

type Employee2 = {
  name: string;
  division: string;
}

const employee2: Employee2 = {
  name: 'Mary Johnson',
  division: 'Sales'
};

console.log(employee2); // { name: 'Mary Johnson', division: 'Sales' }


// Union Types

type Level = 'Low' | 'Medium' | 'High';

const lowLevel : Level = 'Low';
console.log(lowLevel); // Low

// Will not compile
// const levelSeven : Level = 7;


// Primitive types

type Description = string;
const description1 : Description = 'Description one';
console.log(description1); // Description one

interface Description2 {
  text: string;
}

// Will not compile
// const description2 : Description2 = 'Description two';


// Interface merge declarations

interface Person {
  firstName: string;
}

interface Person {
  lastName: string;
}

const person1: Person = {
  firstName: 'William',
  lastName: 'Jones'
};

console.log(person1); // { firstName: 'William', lastName: 'Jones' }



// Class interface implementation

interface Reportable {
  getDetails: () => string;
  getSummary: () => string;
}

class Company implements Reportable {
  private name: string;
  private numEmployees: number;

  constructor(
    name: string,
    numEmployees: number
  ) {
    this.name = name;
    this.numEmployees = numEmployees;
  }

  getName(): string {
    return this.name;
  }

  getNumEmployees(): number {
    return this.numEmployees;
  }

  getDetails(): string {
    return `${this.name}, ${this.numEmployees}`;
  }

  getSummary(): string {
    return `The company ${this.name} has ${this.numEmployees} employees.`;
  }
}
