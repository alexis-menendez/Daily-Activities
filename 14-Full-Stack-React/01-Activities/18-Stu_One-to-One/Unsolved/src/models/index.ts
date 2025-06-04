import sequelize from '../config/connection.js';
import { ReaderFactory } from "./Reader.js";
import { LibraryCardFactory } from "./LibraryCard.js";

const Reader = ReaderFactory(sequelize);
const LibraryCard = LibraryCardFactory(sequelize);

Reader.hasOne(LibraryCard, {
  onDelete: 'CASCADE'
});

LibraryCard.belongsTo(Reader);

export { sequelize, Reader, LibraryCard };
