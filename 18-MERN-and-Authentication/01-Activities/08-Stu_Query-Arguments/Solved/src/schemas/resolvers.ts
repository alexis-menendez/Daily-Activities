import { School, Class, Professor } from '../models/index.js';

// Define types for the arguments
interface ClassArgs {
  id: string;
}

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
    // Define a resolver to retrieve individual classes
    class: async (_parent: unknown, args: ClassArgs) => {
      try {
        // Use the parameter to find the matching class in the collection
        return await Class.findById(args.id).populate('professor');
      } catch (error) {
        console.error('Error fetching class data: ', error);
        throw new Error('Failed to fetch class data');
      }

    },
    professors: async () => {
      try {
        return await Professor.find({}).populate('classes');
      } catch (error) {
        console.error('Error fetching professor data: ', error);
        throw new Error('Failed to fetch professors data');
      }
    }
  },
};

export default resolvers;
