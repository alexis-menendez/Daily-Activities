import sequelize from '../config/connection.js';
import { ReaderFactory } from './Reader.js';
import { LibraryCardFactory } from './LibraryCard.js';

// Initialize the models

const Reader = ReaderFactory(sequelize);
const LibraryCard = LibraryCardFactory(sequelize);

// Create associations between the models

// ! A Reader has one LibraryCard, and a LibraryCard belongs to a Reader. This is a one-to-one relationship, so we can use the hasOne and belongsTo methods to create the association between the models. We also specify that if a Reader is deleted, the associated LibraryCard should also be deleted.
Reader.hasOne(LibraryCard, {
  onDelete: 'CASCADE',
});

LibraryCard.belongsTo(Reader);

export { sequelize, Reader, LibraryCard };
