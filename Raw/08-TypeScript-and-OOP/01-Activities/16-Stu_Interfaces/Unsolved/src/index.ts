// TODO: Create an interface called Employee that describes the following objects. Think about what should be optional and what should be required.
// TODO: Update the objects to use the Employee interface.

// Object 1:
const employee1 = {
  firstName: 'Jimmy',
  lastName: 'Yang',
  role: 'Software Engineer',
  salary: 100000,
  reportsTo: 'Sarah Smith',
};

// Object 2:
const employee2 = {
  firstName: 'Ramon',
  lastName: 'Garcia',
  role: 'Senior Software Engineer',
  salary: 120000,
  reportsTo: 'Sarah Smith',
  bonus: 10000,
};

// Object 3:
const employee3 = {
  firstName: 'Sarah',
  lastName: 'Smith',
  role: 'Director of Engineering',
  salary: 150000,
  reportsTo: 'Sandra Ellis',
  bonus: 20000,
  reports: [employee1, employee2],
  // TODO: update the review method to use the Employee interface
  review: (employee: any) => {
    if (Math.random() > 0.5) {
      return `${employee.firstName} ${employee.lastName} has been Promoted!`;
    } else {
      return `${employee.firstName} ${employee.lastName} has not been Promoted!`;
    }
  },
};

if (employee3.review) {
  const promotionResult = employee3.review(employee2);
  console.log(promotionResult);
}
