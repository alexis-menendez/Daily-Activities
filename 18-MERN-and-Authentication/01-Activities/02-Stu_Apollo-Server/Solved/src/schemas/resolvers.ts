import { Class } from '../models/index.js';

// Create the functions that fulfill the queries defined in `typeDefs.ts`
const resolvers = {
  Query: {
    classes: async () => {
      // Get and return all documents from the classes collection
      return await Class.find({});
    },
  },
};

export default resolvers;
