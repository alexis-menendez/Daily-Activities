// Creates an array containing names of five students in set to the type of a string array
const students: string[] = ['Atticus', 'Enrique', 'Zora', 'Feng', 'Sarah'];

// Logs length of the students array
console.log(students.length);

// Now, write a console log introducing each student
for (let i = 0; i < students.length; i++) {
  console.log(`Welcome to the class, ${students[i]}.`);
}
