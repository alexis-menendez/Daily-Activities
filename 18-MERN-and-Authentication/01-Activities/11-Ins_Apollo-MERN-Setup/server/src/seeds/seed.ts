import db from '../config/connection.js';
import { Profile } from '../models/index.js';
import profileSeeds from './profileSeeds.json' assert { type: "json" };
import cleanDB from './cleanDB.js';

try {
  await db();
  await cleanDB();

  await Profile.insertMany(profileSeeds);

  console.log('Seeding completed successfully!');
  process.exit(0);
} catch (error: unknown) {
  console.error('Error seeding database:', error);
  process.exit(1);
}
