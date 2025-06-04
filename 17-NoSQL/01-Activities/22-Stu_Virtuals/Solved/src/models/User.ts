import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  first?: string;
  last?: string;
  age?: number;
  fullName?: string;
}

// Schema to create User model
const userSchema = new Schema<IUser>(
  {
    first: String,
    last: String,
    age: Number,
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `commentCount` that gets the amount of comments per user
userSchema
  .virtual('fullName')
  // Getter
  .get(function (this: IUser) {
    return `${this.first} ${this.last}`;
  })
  // Setter to set the first and last name
  .set(function (this: any, v: string) {
    const first = v.split(' ')[0];
    const last = v.split(' ')[1];
    this.set({ first, last });
  });

// Initialize our User model
const User = model('user', userSchema);

export default User;
