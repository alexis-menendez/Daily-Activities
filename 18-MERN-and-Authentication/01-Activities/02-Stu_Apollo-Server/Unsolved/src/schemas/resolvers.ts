import { Class } from '../models/index.js';

// TODO: Add a comment describing the functionality of this expression
const resolvers = {
  Query: {
    classes: async () => {
      // TODO: Add a comment describing the functionality of this statement
      return await Class.find({});
    },
  },
};

export default resolvers;
