import {User} from '../models/index.js';
import bcrypt from 'bcrypt';

export const seedUsers = async () => {

  const users = [{ username: 'JollyGuru', password: 'password', email: 'test@test.com' }, { username: 'SunnyScribe', password: 'password', email: 'test2@test.com' }, { username: 'RadiantComet', password: 'password', email: 'test3@test.com' }]

  const hashedUsers = await users.map(user => {
    return {
      ...user,
      password: bcrypt.hashSync(user.password, 10)
    }
  });

  console.log('hashedUsers', hashedUsers)

  await User.bulkCreate(hashedUsers);
};
