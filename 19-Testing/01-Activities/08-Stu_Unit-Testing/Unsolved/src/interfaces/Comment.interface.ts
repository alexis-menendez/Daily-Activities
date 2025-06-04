export interface IComment {
  authorName?: string;
  text?: string;
  createdOn?: string;
  reaction?: string;
  getMetaData(): string;
}
