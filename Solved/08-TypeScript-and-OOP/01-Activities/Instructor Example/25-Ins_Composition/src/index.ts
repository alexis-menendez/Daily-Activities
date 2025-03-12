interface IReportable {
  getDetails: () => string;
  getSummary: () => string;
}

class Person {
  constructor(
    private firstName: string,
    private lastName: string,
    private homeCountry: string
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

class Job {
  constructor(
    private jobTitle: string,
    private department: string
  ) {
    this.jobTitle = jobTitle;
    this.department = department;
  }

  getJobTitle(): string {
    return this.jobTitle;
  }

  getDepartment(): string {
    return this.department;
  }
}

class Employee implements IReportable {
  private person: Person;
  private job: Job;

  constructor(
    firstName: string,
    lastName: string,
    homeCountry: string,
    jobTitle: string,
    department: string
  ) {
    this.person = new Person(firstName, lastName, homeCountry);
    this.job = new Job(jobTitle, department);
  }

  getJobTitle(): string {
    return this.job.getJobTitle();
  }

  getDepartment(): string {
    return this.job.getDepartment();
  }

  getFullName(): string {
    return `${this.person.getLastName()}, ${this.person.getFirstName()}, ${this.job.getDepartment()}`;
  }

  getDetails(): string {
    return `${this.person.getLastName()}, ${this.person.getFirstName()} from ${this.person.getHomeCountry()} -- ${this.job.getJobTitle()}, ${this.job.getDepartment()}`;
  }

  getSummary(): string {
    return `${this.person.getLastName()}, ${this.job.getDepartment()}`;
  }
}

const employee = new Employee(
  'Mike',
  'Johnson',
  'Canada',
  'Software Developer',
  'Engineering'
);
console.log(employee.getFullName());
console.log(employee.getDetails());
console.log(employee.getSummary());
