import { Schema, model, type Document } from 'mongoose';

interface IProfile extends Document {
  name: string;
  skills: string[];
}

const profileSchema = new Schema<IProfile>({
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
      validate: {
        validator: (v: string) => v.length > 0,
        message: 'Skill cannot be an empty string',
      },
    },
  ],
});

const Profile = model<IProfile>('Profile', profileSchema);

export default Profile;
