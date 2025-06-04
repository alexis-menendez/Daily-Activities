import connection from '../config/connection.js';
import { Post, Tags } from '../models/index.js';
// Import functions for seed data
import { getRandomColor, getRandomPost, genRandomIndex } from './data.js';

// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  // Delete the collections if they exist
  let postCheck = await connection.db?.listCollections({ name: 'posts' }).toArray();
  if (postCheck?.length) {
    await connection.dropCollection('posts');
  }

  let tagCheck = await connection.db?.listCollections({ name: 'tags' }).toArray();
  if (tagCheck?.length) {
    await connection.dropCollection('tags');
  }

  // Empty arrays for randomly generated posts and tags
  const tags: any[] = [];
  const posts: any[] = [];

  // Function to make a post object and push it into the posts array
  const makePost = (text: string) => {
    posts.push({
      published: Math.random() < 0.5,
      text,
      tags: [tags[genRandomIndex(tags)]._id],
    });
  };

  // Create 20 random tags and push them into the tags array
  for (let i = 0; i < 20; i++) {
    const tagName = getRandomColor();

    tags.push({
      tagName,
      color: tagName,
    });
  }

  // Wait for the tags to be inserted into the database
  await Tags.collection.insertMany(tags);

  // For each of the tags that exist, make a random post of length 50
  tags.forEach(() => makePost(getRandomPost(50)));

  // Wait for the posts array to be inserted into the database
  await Post.collection.insertMany(posts);

  // Log out a pretty table for tags and posts, excluding the excessively long text property
  console.table(tags);
  console.table(posts, ['published', 'tags', '_id']);
  console.timeEnd('seeding');
  process.exit(0);
});
