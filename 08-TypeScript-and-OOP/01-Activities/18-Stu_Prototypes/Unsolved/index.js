// TODO: Add a comment describing what kind of function this is.
function BlogPost(authorName, title, text, createdOn) {
  // Set the properties of the new object being generated.
  this.authorName = authorName;
  this.title = title;
  this.text = text;
  this.createdOn = createdOn;
  this.comments = [];
  this.printMetaData = function () {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  };
}
// TODO: Add a comment describing the purpose of `.prototype` in this method declaration.
BlogPost.prototype.addComment = function (comment) {
  this.comments.push(comment);
};
const post = new BlogPost(
  'John Doe',
  'My Second Post',
  'Cats are super cute!',
  '02/25/2024'
);
post.addComment('Nice post, I like it!');

// TODO: Add a comment describing what you expect to see printed in the console.
console.log(post.comments);
