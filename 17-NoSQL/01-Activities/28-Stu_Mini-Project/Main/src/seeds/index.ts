import db from '../config/connection.js';
import { Course, Student } from '../models/index.js';
import cleanDB from './cleanDB.js';
import { getRandomName, getRandomAssignments } from './data.js';

try {
  await db();
  await cleanDB();

  // Create empty array to hold the students
  const students = [];

  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 20; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const assignments = getRandomAssignments(20);

    const fullName = getRandomName();
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];
    const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

    students.push({
      first,
      last,
      github,
      assignments,
    });
  }

  // Add students to the collection and await the results
  const studentData = await Student.create(students);

  // Add courses to the collection and await the results
  await Course.create({
    name: 'UCLA',
    inPerson: false,
    students: [...studentData.map(({ _id }: { [key: string]: any }) => _id)],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(students);
  console.info('Seeding complete! 🌱');
  process.exit(0);
} catch (error) {
  console.error('Error seeding database:', error);
  process.exit(1);
}

