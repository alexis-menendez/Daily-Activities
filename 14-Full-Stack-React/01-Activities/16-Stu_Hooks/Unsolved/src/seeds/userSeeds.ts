import { User } from '../models/index.js';

export const seedUsers = async () => {
  await User.bulkCreate(
    [
      { username: 'JollyGuru', password: 'password', email: 'test@test.com' },
      {
        username: 'SunnyScribe',
        password: 'password',
        email: 'test2@test.com',
      },
      {
        username: 'RadiantComet',
        password: 'password',
        email: 'test3@test.com',
      },
    ],
    { individualHooks: true, validate: true }
  );
};
