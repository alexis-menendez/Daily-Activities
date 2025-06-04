import sequelize from '../config/connection.js';
import { ReaderFactory } from './Reader.js';
import { LibraryCardFactory } from './LibraryCard.js';
import { BookFactory } from './Book.js';
import { AuthorFactory } from './Author.js';

// Initialize the models

const Reader = ReaderFactory(sequelize);
const LibraryCard = LibraryCardFactory(sequelize);
const Book = BookFactory(sequelize);
const Author = AuthorFactory(sequelize);

// Create associations between the models

Reader.hasOne(LibraryCard, {
  onDelete: 'CASCADE',
});

LibraryCard.belongsTo(Reader);

// An author can have many books
Author.hasMany(Book, {
  onDelete: 'CASCADE',
  as: 'books',
});

// A book can only have one author
Book.belongsTo(Author);

// A book can have many readers and a reader can have many books
Book.belongsToMany(Reader, {
  through: 'BookReader',
});

Reader.belongsToMany(Book, {
  through: 'BookReader',
});

export { Reader, LibraryCard, Book, Author };
