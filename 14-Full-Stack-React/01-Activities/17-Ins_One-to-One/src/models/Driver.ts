import {
  Model,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
  DataTypes,
  type Sequelize,
} from 'sequelize';

/*
! This is how we declared the Driver model using our own interfaces

import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';

interface DriverAttributes {
  id: number;
  name: string;
  address: string;
}

interface DriverCreationAttributes extends Optional<DriverAttributes, 'id'> {}

export class Driver extends Model<DriverAttributes, DriverCreationAttributes> implements DriverAttributes {
  declare id: number;
  declare name: string;
  declare address: string;
}

*/

// ! This is how we declare the Driver model using sequelize's built-in types

export class Driver extends Model<
  InferAttributes<Driver>,
  InferCreationAttributes<Driver>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare address: string;
}

export function DriverFactory(sequelize: Sequelize) {
  Driver.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      underscored: true,
      modelName: 'driver',
    }
  );
  return Driver;
}
