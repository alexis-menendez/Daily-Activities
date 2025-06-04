import db from '../config/connection.js';
import { Thought } from '../models/index.js';
import cleanDB from './cleanDB.js';
import thoughtData from './thoughtSeeds.json' assert { type: 'json' };

// Function to seed the database
const seedDatabase = async (): Promise<void> => {
  try {
    await db();
    await cleanDB();

    // Bulk create each model
    await Thought.insertMany(thoughtData);

    console.log('Seeding completed successfully!');
    process.exit(0);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error seeding database:', error.message);
    } else {
      console.error('Unknown error seeding database');
    }
    process.exit(1);
  }
};

// Execute the seed function
seedDatabase();
