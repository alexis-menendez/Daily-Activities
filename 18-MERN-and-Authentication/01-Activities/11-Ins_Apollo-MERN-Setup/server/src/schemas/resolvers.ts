import { Profile } from "../models/index.js";


interface ProfileArgs {
  profileId: string;
}

interface AddProfileArgs {
  name: string;
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
    addProfile: async (_parent: unknown, { name }: AddProfileArgs) => {
      return await Profile.create({ name });
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
