class Person {
  private firstName: string;
  private lastName: string;
  private homeCountry: string;
  
  constructor(firstName: string, lastName: string, homeCountry: string) {
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

class Employee extends Person {
  private jobTitle: string;
  private department: string;

  constructor(firstName: string, lastName: string, homeCountry: string, jobTitle: string, department: string) {
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
}

const person = new Person(
  'John',
  'Williams',
  'USA'
);
console.log(person.getFullName());

const employee = new Employee(
  'Mike',
  'Johnson',
  'Canada',
  'Software Developer',
  'Engineering'
);
console.log(employee.getFullName());
