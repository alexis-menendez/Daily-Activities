import { Schema, model, Document } from 'mongoose';

// Define an interface for the Profile document
interface IProfile extends Document {
  name: string;
  skills: string[];
}

// Define the schema for the Profile document
const profileSchema = new Schema<IProfile>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    skills: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true },
  }
);

const Profile = model<IProfile>('Profile', profileSchema);

export default Profile;
