import BlogPost from '../classes/BlogPost.js';
import Comment from '../classes/Comment.js';

describe('BlogPost', () => {
  describe('Instantiate', () => {
    it('should be an instance of BlogPost class', () => {
      const authorName = 'Sarah Connor';
      const title = 'Hello World';
      const text = 'So much to share so little time';
      const createdOn = '02/23/2024';

      const blogPost = new BlogPost(authorName, title, text, createdOn);

      expect(blogPost).toBeInstanceOf(BlogPost);
    });
  });

  describe('Initialize', () => {
    it('should set properties properly', () => {
      const authorName = 'John Doe';
      const title = 'My First Post';
      const text = 'Dogs are super cute!';
      const createdOn = '07/15/2024';

      const blogPost = new BlogPost(authorName, title, text, createdOn);

      expect(blogPost.authorName).toBe(authorName);
      expect(blogPost.title).toBe(title);
      expect(blogPost.text).toBe(text);
      expect(blogPost.createdOn).toBe(createdOn);
    });
  });

  describe('Initialize comments', () => {
    it('should create BlogPost array with a length of 0', () => {
      const authorName = 'John Doe';
      const title = 'My First Post';
      const text = 'Dogs are super cute!';
      const createdOn = '07/15/2024';

      const blogPost = new BlogPost(authorName, title, text, createdOn);

      expect(blogPost.comments.length).toBe(0);
    });
  });

  // TODO: Add comments describing this test.
  // We create an instance of the `BlogPost` object, followed by an instance of the `Comment` object.
  // We add the `Comment` object to the `BlogPost` object, and then verify that the `Comment`
  // has been successfully added.
  describe('addComment() method', () => {
    it('should add comment to comments array', () => {
      const authorName = 'John Doe';
      const title = 'My First Post';
      const text = 'Dogs are super cute!';
      const createdOn = '07/15/2024';

      const blogPost = new BlogPost(authorName, title, text, createdOn);

      const commentAuthorName = 'John Doe';
      const commentText = 'Dogs are super cute!';
      const commentCreatedOn = '07/15/2024';
      const reaction = '🐶';

      const comment = new Comment(commentAuthorName, commentText, commentCreatedOn, reaction);
      blogPost.addComment(comment);

      expect(blogPost.comments[0]).toBeInstanceOf(Comment);
    });
  });

  describe('getMetaData() method', () => {
    it('should return message with data', () => {
      const authorName = 'John Doe';
      const title = 'My First Post';
      const text = 'Dogs are super cute!';
      const createdOn = '07/15/2024';
      const expectedMetaData = `Created by ${authorName} on ${createdOn}`;

      const blogPost = new BlogPost(authorName, title, text, createdOn);

      expect(blogPost.getMetaData()).toBe(expectedMetaData);
    });
  });
});
