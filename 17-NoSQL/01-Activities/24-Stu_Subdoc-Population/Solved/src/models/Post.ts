import { Schema, model, Document, ObjectId } from 'mongoose';

interface IPost extends Document {
  published: boolean;
  createdAt: Date;
  tags: ObjectId[];
  text: string;

}

// Schema to create Post model
const postSchema = new Schema<IPost>(
  {
    published: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Tag',
      },
    ],
    text: {
      type: String,
      minLength: 15,
      maxLength: 500,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `tagCount` that gets the amount of comments per user
postSchema
  .virtual('tagCount')
  // Getter
  .get(function (this: any) {
    return this.tags.length;
  });

// Initialize our Post model
const Post = model('Post', postSchema);

export default Post;
