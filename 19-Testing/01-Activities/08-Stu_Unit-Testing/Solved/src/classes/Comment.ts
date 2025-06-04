import ForumItem from './ForumItem.js';
import type { IComment } from '../interfaces/Comment.interface.js';

export default class Comment extends ForumItem implements IComment {
  reaction: string
  constructor(authorName: string, text: string, createdOn: string, reaction: string) {
    super(authorName, text, createdOn);
    this.reaction = reaction;
  }

  override getMetaData(): string {
    return `Created by ${this.authorName} on ${this.createdOn} ${this.reaction}`;
  }
}
