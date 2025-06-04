import { Profile } from '../models/index.js';

// Define types for the arguments
interface ProfileArgs {
  profileId: string;
}

interface AddProfileArgs {
  name: string;
}

interface AddSkillArgs {
  profileId: string;
  skill: string;
}

interface RemoveSkillArgs {
  profileId: string;
  skill: string;
}

const resolvers = {
  // Important for useQuery: The resolver matches the typeDefs entry point and informs the request of the relevant data
  Query: {
    profiles: async () => {
      return await Profile.find();
    },
    // Important for Query Variables: Each query resolver function can accept up to four parameters.
    // The second parameter, commonly referred to as "args," represents the variable argument values passed with the query.
    // It is always an object, and in this case, we are destructuring that object to retrieve the profileId value.
    profile: async (_parent: unknown, { profileId }: ProfileArgs) => {
      return await Profile.findOne({ _id: profileId });
    },
  },
  // Important for useMutation: The resolver matches the typeDefs entry point and informs the request of the relevant data
  Mutation: {
    addProfile: async (_parent: unknown, { name }: AddProfileArgs) => {
      return await Profile.create({ name });
    },
    addSkill: async (_parent: unknown, { profileId, skill }: AddSkillArgs) => {
      return await Profile.findOneAndUpdate(
        { _id: profileId },
        {
          $addToSet: { skills: skill },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeProfile: async (_parent: unknown, { profileId }: ProfileArgs) => {
      return await Profile.findOneAndDelete({ _id: profileId });
    },
    removeSkill: async (_parent: unknown, { profileId, skill }: RemoveSkillArgs) => {
      return await Profile.findOneAndUpdate(
        { _id: profileId },
        { $pull: { skills: skill } },
        { new: true }
      );
    },
  },
};

export default resolvers;
