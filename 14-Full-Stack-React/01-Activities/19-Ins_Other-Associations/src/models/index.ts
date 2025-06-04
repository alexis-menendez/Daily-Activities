import sequelize from '../config/connection.js';
import { DriverFactory } from './Driver.js';
import { LicenseFactory } from './License.js';
import { CarFactory } from './Car.js';

// Initialize the models

const Driver = DriverFactory(sequelize);
const License = LicenseFactory(sequelize);
const Car = CarFactory(sequelize);

// Create associations between the models
Driver.hasOne(License, {
  onDelete: 'CASCADE',
});

License.belongsTo(Driver);

// Define a Driver as having many Cars, thus creating a foreign key in the `car` table
Driver.hasMany(Car, {
  onDelete: 'CASCADE',
});

// The association can also be created from the Car side
Car.belongsTo(Driver);


export { sequelize, Driver, License, Car };
