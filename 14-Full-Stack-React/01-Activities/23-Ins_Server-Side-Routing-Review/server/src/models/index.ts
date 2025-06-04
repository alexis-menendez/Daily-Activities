import sequelize from '../config/connection.js';
import { JokeFactory } from './joke.js';

const Joke = JokeFactory(sequelize);

export { Joke };
