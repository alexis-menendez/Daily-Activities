import connection from '../config/connection.js';
import { Post, Comment } from '../models/index.js';
import { getRandomName, getRandomComments, getRandomPost, genRandomIndex } from './data.js';


// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  // Delete the collections if they exist
  
  let postCheck = await connection.db?.listCollections({ name: 'posts' }).toArray();
  if (postCheck?.length) {
    await connection.dropCollection('posts');
  }

  let commentCheck = await connection.db?.listCollections({ name: 'comments' }).toArray();
  if (commentCheck?.length) {
    await connection.dropCollection('comments');
  }

  // Empty arrays for randomly generated posts and comments
  const comments: any[] = [...getRandomComments(10)];
  const posts: any[] = [];

  // Makes comments array
  const makePost = (text: string) => {
    posts.push({
      text,
      username: getRandomName().split(' ')[0],
      comments: [comments[genRandomIndex(comments)]._id],
    });
  };

  // Wait for the comments to be inserted into the database
  await Comment.insertMany(comments);

  // For each of the comments that exist, make a random post of 10 words
  comments.forEach(() => makePost(getRandomPost(10)));

  // Wait for the posts array to be inserted into the database
  await Post.insertMany(posts);

  // Log out a pretty table for comments and posts
  console.table(comments);
  console.table(posts);
  console.timeEnd('seeding complete 🌱');
  process.exit(0);
});
