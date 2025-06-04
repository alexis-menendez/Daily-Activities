import ForumItem from '../classes/ForumItem.js';

describe('ForumItem', () => {
  // TODO: Add a comment describing this test.
  // We create an instance of the `ForumItem` object, and use the method `toBeInstanceOf()` to verify its
  // successful creation.
  describe('Instantiate', () => {
    it('should be an instance of ForumItem class', () => {
      const authorName = 'Jack Doe';
      const text = 'This is some random text';
      const createdOn = '07/15/2024';

      const forumItem = new ForumItem(
        authorName,
        text,
        createdOn
      );

      expect(forumItem).toBeInstanceOf(ForumItem);
    });
  });

  // TODO: Add a comment describing this test.
  // We create an instance of the `ForumItem` object, and use the method `toBe()` to verify that each
  // of its properties have been successfully defined.
  describe('Initialize', () => {
    it('should set properties properly', () => {
      const authorName = 'Jack Doe';
      const text = 'This is some random text';
      const createdOn = '07/15/2024';

      const forumItem = new ForumItem(
        authorName,
        text,
        createdOn
      );

      expect(forumItem.authorName).toBe(authorName);
      expect(forumItem.text).toBe(text);
      expect(forumItem.createdOn).toBe(createdOn);
    });
  });

  // TODO: Add a comment describing this test.
  // We create an instance of the `Comment` object, and define what the output we expected from the
  // calculated `metaData` field. We then use the method `toBe()` to verify that `metaData` results are
  // as we expect.
  describe('getMetaData() method', () => {
    it('should return message with data', () => {
      const authorName = 'Jack Doe';
      const text = 'This is some random text';
      const createdOn = '07/15/2024';
      const expectedMetaData = `Created by ${authorName} on ${createdOn}`;

      const forumItem = new ForumItem(
        authorName,
        text,
        createdOn
      );

      expect(forumItem.getMetaData()).toBe(expectedMetaData);
    });
  });
});
