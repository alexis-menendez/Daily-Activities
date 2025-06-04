import sequelize from '../config/connection.js'
import { FeedbackFactory } from './feedback.js';
import { TipFactory } from './tips.js';

const Tip = TipFactory(sequelize);
const Feedback = FeedbackFactory(sequelize);

export { sequelize, Feedback, Tip };
