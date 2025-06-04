import { Schema, model } from 'mongoose';
import Response from './Response.js';

interface IVideo {
  published: boolean;
  createdAt: Date;
  advertiserFriendly: boolean;
  description: string;
  responses: Response[];
}

// Schema to create Post model
const videoSchema = new Schema<IVideo>(
  {
    published: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    advertiserFriendly: {
      type: Boolean,
      default: true,
    },
    description: {
      type: String,
      minLength: 8,
      maxLength: 500,
    },
    responses: [Response],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `responses` that gets the amount of response per video
videoSchema
  .virtual('getResponses')
  // Getter
  .get(function () {
    return this.responses.length;
  });

// Initialize our Video model
const Video = model('video', videoSchema);

export default Video;
