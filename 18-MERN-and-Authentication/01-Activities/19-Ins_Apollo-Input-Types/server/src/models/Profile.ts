import { Schema, model, type Document } from 'mongoose';

interface IProfile extends Document {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  zipCode?: string;
  skills: string[];
}


// ! Remember to update the schema to match the requirements of the application.
const profileSchema = new Schema<IProfile>({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  zipCode: {
    type: String,
    required: false,
    default: '',
  },
  skills: [
    {
      type: String,
      trim: true,
    },
  ],
});

const Profile = model<IProfile>('Profile', profileSchema);

export default Profile;
