class Person {
  #firstName;
  #lastName;
  #homeCountry;
  
  constructor(firstName, lastName, homeCountry) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#homeCountry = homeCountry;
  }

  getFirstName() {
    return this.#firstName;
  }

  getLastName() {
    return this.#lastName;
  }

  getHomeCountry() {
    return this.#homeCountry;
  }

  getFullName() {
    return `${this.#lastName}, ${this.#firstName}`;
  }
}

class Employee extends Person {
  #jobTitle;
  #department;

  constructor(firstName, lastName, homeCountry, jobTitle, department) {
    super(firstName, lastName, homeCountry);

    this.#jobTitle = jobTitle;
    this.#department = department;
  }

  getJobTitle() {
    return this.#jobTitle;
  }

  getDepartment() {
    return this.#department;
  }

  getFullName() {
    return `${super.getLastName()}, ${super.getFirstName()}, ${this.#department}`;
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
