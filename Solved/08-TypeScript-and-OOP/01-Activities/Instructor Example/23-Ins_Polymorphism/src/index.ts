interface Reportable {
  getDetails: () => string;
  getSummary: () => string;
}

class Person {
  private firstName: string;
  private lastName: string;
  private homeCountry: string;

  constructor(
    firstName: string,
    lastName: string,
    homeCountry: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.homeCountry = homeCountry;
  }

  getFirstName(): string {
    return this.firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  getHomeCountry(): string {
    return this.homeCountry;
  }

  getFullName(): string {
    return `${this.lastName}, ${this.firstName}`;
  }
}

class Employee extends Person implements Reportable {
  private jobTitle: string;
  private department: string;

  constructor(
    firstName: string,
    lastName: string,
    homeCountry: string,
    jobTitle: string,
    department: string
  ) {
    super(firstName, lastName, homeCountry);

    this.jobTitle = jobTitle;
    this.department = department;
  }

  getJobTitle(): string {
    return this.jobTitle;
  }

  getDepartment(): string {
    return this.department;
  }

  override getFullName(): string {
    return `${super.getLastName()}, ${super.getFirstName()}, ${this.department}`;
  }

  getDetails(): string {
    return `${super.getLastName()}, ${super.getFirstName()} from ${super.getHomeCountry()} -- ${this.jobTitle}, ${this.department}`;
  }

  getSummary(): string {
    return `${super.getLastName()}, ${this.department}`;
  }
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

const employee = new Employee(
  'Mike',
  'Johnson',
  'Canada',
  'Software Developer',
  'Engineering'
);
const company = new Company('ABC Corporation', 1000);

const reportableArray = new Array<Reportable>();
reportableArray.push(employee);
reportableArray.push(company);

for (const element of reportableArray) {
  console.log(element.getDetails());
  console.log(element.getSummary());
}

const person = new Person('John', 'Williams', 'USA');
// Will not compile
// reportableArray.push(person);
