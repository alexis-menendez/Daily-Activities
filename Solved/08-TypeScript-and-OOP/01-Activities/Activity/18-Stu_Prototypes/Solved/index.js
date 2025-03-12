// Creation of a constructor function that defines the properties that make a BlogPost.
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
// Method that takes in a comment and adds it to the BlogPost's comments array inherited via prototyping.
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

// Should show an array with 1 child that says 'Nice post, I like it!'
console.log(post.comments);
