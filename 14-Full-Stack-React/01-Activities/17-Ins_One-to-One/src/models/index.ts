import sequelize from '../config/connection.js';
import { DriverFactory } from './Driver.js';
import { LicenseFactory } from './License.js';

// Initialize the models

const Driver = DriverFactory(sequelize);
const License = LicenseFactory(sequelize);

// Define a Driver as having one License to create a foreign key in the `license` table
Driver.hasOne(License, {
  // When we delete a Driver, make sure to also delete the associated License.
  onDelete: 'CASCADE',
});

// We can also define the association starting with License
License.belongsTo(Driver);

// We package our two models and export them as an object so we can import them together and use their proper names

export { sequelize, Driver, License };
