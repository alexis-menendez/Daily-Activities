import sequelize from '../config/connection.js';
import { ProfileFactory } from './Profile.js';

const Profile = ProfileFactory(sequelize);

export { sequelize, Profile };
