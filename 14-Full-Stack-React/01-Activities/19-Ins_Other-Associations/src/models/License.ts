import {
  Model,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
  DataTypes,
  type Sequelize,
  type ForeignKey,
} from 'sequelize';

import type { Driver } from './Driver.js';

/*
! This is how we declared the License model using our own interfaces

import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';

interface LicenseAttributes {
  id: number;
  licenseNumber: string;
  isDonor: boolean;
  driverId: number;
}

interface LicenseCreationAttributes extends Optional<LicenseAttributes, 'id'> {}

export class License extends Model<LicenseAttributes, LicenseCreationAttributes> implements LicenseAttributes {
  declare id: number;
  declare licenseNumber: string;
  declare isDonor: boolean;
  declare driverId: number;
}

*/

// ! This is how we declare the License model using sequelize's built-in types

export class License extends Model<
  InferAttributes<License>,
  InferCreationAttributes<License>
> {
  declare id: CreationOptional<number>;
  declare licenseNumber: CreationOptional<string>;
  declare isDonor: boolean;
  declare driverId: ForeignKey<Driver['id']>;
}

export function LicenseFactory(sequelize: Sequelize) {
  License.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      licenseNumber: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      isDonor: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      underscored: true,
      modelName: 'license',
    }
  );

  return License;
}
