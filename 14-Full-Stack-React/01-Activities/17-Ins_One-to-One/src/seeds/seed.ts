import { Driver, License } from '../models/index.js';

import driverSeedData from './driverSeedData.json' assert { type: 'json' };

export const seedDrivers = async () => {
  const drivers = await Driver.bulkCreate(driverSeedData, {
    individualHooks: true,
    returning: true,
    validate: true,
  });

  for (const driver of drivers) {
    console.log('Creating license for driver with id:', driver.id);
    await License.create({
      driverId: driver.id,
      // Assign every other driver as a donor
      isDonor: driver.id % 2 === 0 ? true : false
    });
  }
};
