import { Thought } from '../models/index.js';
import process from 'process';

const cleanDB = async (): Promise<void> => {
  try {
    await Thought.deleteMany({});
    console.log('Thought collection cleaned.');

  } catch (err: unknown) {
    console.error('Error cleaning collections:', err);
    process.exit(1);
  }
};

export default cleanDB;
