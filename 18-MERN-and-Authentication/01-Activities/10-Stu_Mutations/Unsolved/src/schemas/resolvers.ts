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

interface UpdateClassArgs {
  id: string;
  building: string;
}

const resolvers = {
  Query: {
    schools: async () => {
      return await School.find({}).populate('classes').populate({
        path: 'classes',
        populate: 'professor'
      });
    },
    classes: async () => {
      return await Class.find({}).populate('professor');
    },
    class: async (_parent: unknown, args: ClassArgs) => {
      return await Class.findById(args.id);
    },
    professors: async () => {
      return await Professor.find({}).populate('classes');
    }
  },
  Mutation: {
    addSchool: async (_parent: unknown, { name, location, studentCount }: AddSchoolArgs) => {
      return await School.create({ name, location, studentCount });
    },
    updateClass: async (_parent: unknown, { id, building }: UpdateClassArgs) => {
      return await Class.findOneAndUpdate({ _id: id },{ building });
    }
  }
};

export default resolvers;
