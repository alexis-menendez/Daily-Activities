// Define a class for blog posts
class BlogPost {
  // Declare properties for the author's name, title, text, creation date, and comments
  authorName: string;
  title: string;
  text: string;
  createdOn: string;
  comments: BlogComment[];

  // Define a constructor to initialize a new blog post
  constructor(
    authorName: string,
    title: string,
    text: string,
    createdOn: string,
    comments: BlogComment[] = []
  ) {
    // use default parameter to set 'comments' to an empty array of `BlogComment` objects if no value is provided
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;
    this.comments = comments;
  }

  // Define a method to print the metadata of the blog post
  printMetaData(): void {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  }

  // Define a method to add a comment to the blog post
  addComment(comment: BlogComment): void {
    this.comments.push(comment);
  }
}

// Define a class for blog comments
class BlogComment {
  // Declare properties for the author's name, text, and creation date
  authorName: string;
  text: string;
  createdOn: string;

  // Define a constructor to initialize a new blog comment
  constructor(authorName: string, text: string, createdOn: string) {
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn;
  }

  // Define a method to print the metadata of the blog comment
  printMetaData(): void {
    console.log(
      `Created by ${this.authorName} on ${this.createdOn} with ${this.text}`
    );
  }
}

// Create a new blog comment
const newComment: BlogComment = new BlogComment(
  'Jane Doe',
  'This post is super cool!',
  '4/18/2024'
);

// Create a new blog post
const newPost: BlogPost = new BlogPost(
  'John Doe',
  'My Third Post',
  'Both dogs and cats are super cute!',
  '4/17/2024'
);

// Add the new comment to the new post
newPost.addComment(newComment);

// Print the metadata of the new post and the new comment
newPost.printMetaData();
newComment.printMetaData();
