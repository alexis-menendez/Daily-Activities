import { School, Class, Professor } from '../models/index.js';

// Define types for the arguments

interface ClassArgs {
  id: string;
}

interface AddSchoolArgs {
  name: string;
  location: string;
  studentCount: number;
}

const resolvers = {
  Query: {
    schools: async () => {
      return await School.find({}).populate('classes').populate({
        path: 'classes',
        populate: 'professor',
      });
    },
    classes: async () => {
      return await Class.find({}).populate('professor');
    },
    class: async (_parent: unknown, args: ClassArgs) => {
      return await Class.findById(args.id).populate('professor');
    },
    professors: async () => {
      return await Professor.find({}).populate('classes');
    },
  },
  // Define the functions that will fulfill the mutations
  Mutation: {
    addSchool: async (_parent: unknown, { name, location, studentCount }: AddSchoolArgs) => {
      // Create and return the new School object
      return await School.create({ name, location, studentCount });
    },
  },
};

export default resolvers;
