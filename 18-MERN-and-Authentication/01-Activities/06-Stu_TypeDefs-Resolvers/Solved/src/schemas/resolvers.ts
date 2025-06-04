import { School, Class, Professor } from '../models/index.js';

const resolvers = {
  Query: {
    schools: async () => {
      try {
        return await School.find({}).populate('classes').populate({
          path: 'classes',
          populate: 'professor'
        });
      } catch (error) {
        console.error('Error fetching schools data: ', error);
        throw new Error('Failed to fetch schools data');
      }
    },
    classes: async () => {
      try {
        return await Class.find({}).populate('professor');
      } catch (error) {
        console.error('Error fetching class data: ', error);
        throw new Error('Failed to fetch class data');
      }
    },
    professors: async () => {
      try {
        // Populate the classes subdocument on every instance of Professor
        return await Professor.find({}).populate('classes');
      } catch (error) {
        console.error('Error fetching professor data: ', error);
        throw new Error('Failed to fetch professors data');
      }
    }
  },
};

export default resolvers;
