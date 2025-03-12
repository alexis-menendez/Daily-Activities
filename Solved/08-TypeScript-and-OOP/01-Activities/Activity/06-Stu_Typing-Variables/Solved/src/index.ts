const firstName: string = 'John';
const lastName: string = 'Doe';
const age: number = 30;
let jobTitle: string;
let salary: number;
let remoteStatus: unknown;

jobTitle = 'Web Developer';
salary = 75000;

const employeeName: string = `${firstName} ${lastName}`;

console.log(`
Employee Information:
Name: ${employeeName}
Age: ${age}
Job Title: ${jobTitle}
Salary: $${salary}
`);

remoteStatus = true;

if (remoteStatus === true) {
  console.log(`${employeeName} is working remotely today.`);
} else {
  console.log(`${employeeName} is working from the office today.`);
}

function promotion() {
  jobTitle = 'Senior Web Developer';
  salary += 10000;
}

promotion();

console.log(`
Employee Information:
Name: ${employeeName}
Age: ${age}
Job Title: ${jobTitle}
Salary: $${salary}
`);
