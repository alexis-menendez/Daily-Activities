import Comment from '../classes/Comment.js';

describe('Comment', () => {
  describe('Instantiate', () => {
    it('should be an instance of Comment class', () => {
      const authorName = 'Jane Doe';
      const text = 'This post is super cool!';
      const createdOn = '07/15/2024';
      const reaction = '🐶';

      const comment = new Comment(
        authorName,
        text,
        createdOn,
        reaction
      );

      expect(comment).toBeInstanceOf(Comment);
    });
  });

  describe('Initialize', () => {
    it('should set properties properly', () => {
      const authorName = 'Jane Doe';
      const text = 'This post is super cool!';
      const createdOn = '07/15/2024';
      const reaction = '🐶';

      const comment = new Comment(
        authorName,
        text,
        createdOn,
        reaction
      );

      expect(comment.authorName).toBe(authorName);
      expect(comment.text).toBe(text);
      expect(comment.createdOn).toBe(createdOn);
      expect(comment.reaction).toBe(reaction);
    });
  });

  describe('getMetaData() method', () => {
    it('should return message with data', () => {
      const authorName = 'Jane Doe';
      const text = 'This post is super cool!';
      const createdOn = '07/15/2024';
      const reaction = '🐶';
      const expectedMetaData = `Created by ${authorName} on ${createdOn} ${reaction}`;

      const comment = new Comment(
        authorName,
        text,
        createdOn,
        reaction
      );

      expect(comment.getMetaData()).toBe(expectedMetaData);
    });
  });
});
