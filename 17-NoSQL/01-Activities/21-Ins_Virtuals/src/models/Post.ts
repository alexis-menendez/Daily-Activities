import { Schema, model, Document, ObjectId } from 'mongoose';

interface IPost extends Document { 
  _id: ObjectId;
  text?: string;
  username?: string;
  comments?: string[];
}

// Schema to create Post model
const postSchema = new Schema<IPost>(
  {
    text: String,
    username: String,
    comments: [{ type: Schema.Types.ObjectId, ref: 'comment' }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `commentCount` that gets the amount of comments per post
postSchema.virtual('commentCount').get(function () {
  return this.comments?.length;
});

// Initialize our Post model
const Post = model('post', postSchema);

export default Post;
