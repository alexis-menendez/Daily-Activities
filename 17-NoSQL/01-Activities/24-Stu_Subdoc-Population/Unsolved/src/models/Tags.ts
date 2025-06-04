import { Schema, model, Document } from 'mongoose';

interface ITag extends Document {
  tagName: string;
  color?: string;
  createdAt: Date;
} 

const tagSchema = new Schema<ITag>(
  {
    tagName: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#008080',
    },
    createdAt: Date,
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

tagSchema
  .virtual('getTagCss')
  // Getter
  .get(function (this: any) {
    return `color: ${this.color}`;
  });

const Tag = model('Tag', tagSchema);

export default Tag;
