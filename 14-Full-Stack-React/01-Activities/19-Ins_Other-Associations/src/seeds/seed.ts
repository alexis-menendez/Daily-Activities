import { Driver, License, Car } from '../models/index.js';

import driverSeedData from './driverSeedData.json' assert { type: 'json' };
import carSeedData from './carSeedData.json' assert { type: 'json' };

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

  // Create a car for each driver
  for (const car of carSeedData) {
    await Car.create({
      ...car,
      driverId: drivers[Math.floor(Math.random() * drivers.length)].id
    });
  }
};
