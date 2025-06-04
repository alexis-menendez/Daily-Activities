import type { IBlogPost } from '../interfaces/BlogPost.interface.js';
import type { IComment } from '../interfaces/Comment.interface.js';
import ForumItem from './ForumItem.js';

export default class BlogPost extends ForumItem implements IBlogPost {
  title: string;
  comments: IComment[];
  constructor(authorName: string, title: string, text: string, createdOn: string) {
    super(authorName, text, createdOn);
    this.title = title;
    this.comments = [];
  }

  addComment(comment: IComment): void {
    this.comments.push(comment);
  }
}
