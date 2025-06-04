import sequelize from '../config/connection.js';
import { ReaderFactory } from './Reader.js';
import { LibraryCardFactory } from './LibraryCard.js';

// TODO: Initialize the models

const Reader = ReaderFactory(sequelize);
const LibraryCard = LibraryCardFactory(sequelize);

// Create associations between the models

Reader.hasOne(LibraryCard, {
  onDelete: 'CASCADE',
});

LibraryCard.belongsTo(Reader);

// TODO: An author can have many books


// TODO: A book can only have one author


// TODO: A book can have many readers and a reader can have many books


export { Reader, LibraryCard };
