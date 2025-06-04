import { Reader, LibraryCard } from '../models/index.js';

import readerSeedData from './readerSeedData.json' assert { type: 'json' };

export const seedReaders = async () => {
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
  }
};
