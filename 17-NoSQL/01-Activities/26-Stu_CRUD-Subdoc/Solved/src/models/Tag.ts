import { Schema, Types, Document, ObjectId } from 'mongoose';

interface ITag extends Document { 
  tagId: ObjectId;
  tagBody: string;
  createdAt: Date;
}

const tagSchema = new Schema<ITag>(
  {
    tagId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    tagBody: {
      type: String,
      required: true,
      maxlength: 25,
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

export default tagSchema;
