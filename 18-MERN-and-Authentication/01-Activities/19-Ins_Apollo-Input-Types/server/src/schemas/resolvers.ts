import { Profile } from '../models/index.js';

interface ProfileArgs {
  profileId: string;
}

// ! Important for input types: We need to update the resolver arguments to accept the input types we defined in the typeDefs.
interface AddProfileArgs {
  profileInput: {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    zipCode: string;
  };
}

interface SkillArgs {
  profileId: string;
  skill: string;
}

const resolvers = {
  Query: {
    profiles: async () => {
      return await Profile.find();
    },
    profile: async (_parent: unknown, { profileId }: ProfileArgs) => {
      return await Profile.findOne({ _id: profileId });
    },
  },

  Mutation: {

    // ! Important for input types: With the arguments updated to accept the input types, we can now destructure the profileInput object from the args object.
    addProfile: async (_parent: unknown, { profileInput }: AddProfileArgs) => {
      // We can now spread the profileInput object to the create method.
      return await Profile.create({ ...profileInput });
    },
    addSkill: async (_parent: unknown, { profileId, skill }: SkillArgs) => {
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
    removeSkill: async (_parent: unknown, { profileId, skill }: SkillArgs) => {
      return await Profile.findOneAndUpdate(
        { _id: profileId },
        { $pull: { skills: skill } },
        { new: true }
      );
    },
  },
};

export default resolvers;
