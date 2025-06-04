import type { IComment } from "./Comment.interface.js";
export interface IBlogPost {
  authorName?: string;
  text?: string;
  createdOn?: string;
  getMetaData(): string;
  addComment(comment: IComment): void;
}
