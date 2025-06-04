import { School, Class, Professor } from '../models/index.js';

const resolvers = {
  Query: {
    schools: async () => {
      try {
        // Populate the classes and professor subdocuments when querying for schools
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
        // Populate the professor subdocument when querying for classes
        return await Class.find({}).populate('professor');
      } catch (error) {
        console.error('Error fetching class data: ', error);
        throw new Error('Failed to fetch class data');
      }
    },
    professors: async () => {
      try {
        return await Professor.find({});
      } catch (error) {
        console.error('Error fetching professor data: ', error);
        throw new Error('Failed to fetch professors data');
      }
    }
  },
};

export default resolvers;
