import { Reader, LibraryCard, Book, Author } from '../models/index.js';

import readerSeedData from './readerSeedData.json' assert { type: 'json' };
import authorSeedData from './authorSeedData.json' assert { type: 'json' };
import bookSeedData from './bookSeedData.json' assert { type: 'json' };

export const seedDatabase = async () => {
  await Author.bulkCreate(authorSeedData, {
    validate: true,
  });

  const books = await Book.bulkCreate(bookSeedData, {
    returning: true,
    validate: true,
  });

  console.log('\n----- AUTHORS AND BOOKS SEEDED -----\n');

  const readers = await Reader.bulkCreate(readerSeedData, {
    individualHooks: true,
    returning: true,
    validate: true,
  });

  for (const reader of readers) {
    console.log('Creating library card for reader with id:', reader.id);
    await LibraryCard.create({
      readerId: reader.id,
    });



    console.log('Checking out books for reader with id:', reader.id);
    const randomBooks = books.slice(Math.floor(Math.random() * books.length));

    // ! This method is added by Sequelize to the `Reader` model. However, TS is not aware of the association before compile time, so we need to create a "virtual" version in the model file.
    await reader.addBooks(randomBooks);
  }
};
