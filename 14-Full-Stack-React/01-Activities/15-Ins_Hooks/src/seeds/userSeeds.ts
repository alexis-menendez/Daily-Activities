import { User } from '../models/index.js';
import bcrypt from 'bcrypt';

export const seedUsers = async () => {
  const users = [
    { username: 'JollyGuru', password: 'password', email: 'Test@test.com' },
    { username: 'SunnyScribe', password: 'password', email: 'tesT2@test.com' },
    { username: 'RadiantComet', password: 'password', email: 'test3@Test.com' },
  ];

  const hashedUsers = [];
  
  for (const user of users) {
    hashedUsers.push({
      ...user,
      password: bcrypt.hashSync(user.password, 10),
    });
  }

  console.log('hashedUsers', hashedUsers);

  await User.bulkCreate(hashedUsers, { individualHooks: true, validate: true });
};
