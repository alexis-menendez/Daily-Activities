interface Employee {
  firstName: string;
  lastName: string;
  role: string;
  salary: number;
  reportsTo: string;
  bonus?: number; // Optional property
  reports?: Employee[]; // Optional property that is an array of Employee objects
  review?: (employee: Employee) => string; // Optional method that takes an Employee object and returns a string
}

// Object 1:
const employee1: Employee = {
  firstName: 'Jimmy',
  lastName: 'Yang',
  role: 'Software Engineer',
  salary: 100000,
  reportsTo: 'Sarah Smith',
};

// Object 2:
const employee2: Employee = {
  firstName: 'Ramon',
  lastName: 'Garcia',
  role: 'Senior Software Engineer',
  salary: 120000,
  reportsTo: 'Sarah Smith',
  bonus: 10000,
};

// Object 3:
const employee3: Employee = {
  firstName: 'Sarah',
  lastName: 'Smith',
  role: 'Director of Engineering',
  salary: 150000,
  reportsTo: 'Sandra Ellis',
  bonus: 20000,
  reports: [employee1, employee2],
  // review method that takes an Employee object and returns a string
  review: (employee: Employee): string => {
    if (Math.random() > 0.5) {
      return `${employee.firstName} ${employee.lastName} has been Promoted!`;
    } else {
      return `${employee.firstName} ${employee.lastName} has not been Promoted!`;
    }
  },
};

// Check if the review method exists before calling it
if (employee3.review) {
  const promotionResult = employee3.review(employee2);
  console.log(promotionResult);
}
