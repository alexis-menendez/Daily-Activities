import type { IForumItem } from "../interfaces/ForumItem.interface.js";

export default class ForumItem implements IForumItem {
  authorName: string;
  text: string;
  createdOn: string;
  constructor(authorName: string, text: string, createdOn: string) {
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn;
  }

  getMetaData(): string {
    return `Created by ${this.authorName} on ${this.createdOn}`;
  }
}
