import { Schema, model, Document, ObjectId } from 'mongoose';

interface IComment extends Document {
  _id?: ObjectId;
  text?: string;
  username?: string;
}

// Schema for what makes up a comment
const commentSchema = new Schema<IComment>({
  text: String,
  username: String,
});

// Initialize the Comment model
const Comment = model('comment', commentSchema);

export default Comment;
