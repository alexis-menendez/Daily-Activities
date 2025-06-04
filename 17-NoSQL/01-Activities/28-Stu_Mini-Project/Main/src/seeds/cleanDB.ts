import { Course, Student } from '../models/index.js';

const cleanDB = async (): Promise<void> => {
  try {
    await Course.deleteMany({});
    console.log('Course collection cleaned.');

    await Student.deleteMany({});
    console.log('Student collection cleaned.');

  } catch (err) {
    console.error('Error cleaning collections:', err);
    process.exit(1);
  }
};

export default cleanDB;
