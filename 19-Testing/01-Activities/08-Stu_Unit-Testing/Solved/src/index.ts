import BlogPost from './classes/BlogPost.js';
import Comment from './classes/Comment.js';

const newPost = new BlogPost(
  'John Doe',
  'My Fourth Post',
  'Dogs, cats, and snakes are super cute!',
  '12/19/2021'
);

const newComment = new Comment(
  'Jane Doe',
  'This post is really awesome!',
  '12/20/2021',
  '🐶😺🐍'
);

console.log(newPost.getMetaData());
console.log(newComment.getMetaData());
