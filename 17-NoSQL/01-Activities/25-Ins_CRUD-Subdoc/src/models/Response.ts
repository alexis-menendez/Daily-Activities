import { Schema, Document, ObjectId, Types } from 'mongoose';

interface IResponse extends Document {
  reactionId: ObjectId;
  responseBody: string;
  username: string;
  createdAt: Date;
}

const responseSchema = new Schema<IResponse>(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    responseBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

export default responseSchema;
