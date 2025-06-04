import {
  Model,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
  DataTypes,
  type ForeignKey,
  type Sequelize,
} from 'sequelize';

import type { Reader } from './Reader.js';

/*
! LibraryCard Model using our own interfaces

import { DataTypes, Sequelize, Model, Optional } from 'sequelize'

interface LibraryCardAttributes {
  id: number;
  readerId: number;
  cardNumber: string;
}

interface LibraryCardCreationAttributes extends Optional<LibraryCardAttributes, 'id'> {}

export class LibraryCard extends Model<LibraryCardAttributes, LibraryCardCreationAttributes> implements LibraryCardAttributes {
  declare id: number;
  declare readerId: number;
  declare cardNumber: string;
}

*/

export class LibraryCard extends Model<
  InferAttributes<LibraryCard>,
  InferCreationAttributes<LibraryCard>
> {
  declare id: CreationOptional<number>;
  declare readerId: ForeignKey<Reader['id']>;
  declare cardNumber: CreationOptional<string>;
}

export function LibraryCardFactory(sequelize: Sequelize) {
  LibraryCard.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      // Use Sequelize's UUID functionality to generate a unique number for the library card instead of making us do it ourselves
      cardNumber: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
    },
    {
      sequelize,
      timestamps: false,
      underscored: true,
      modelName: 'library_card',
    }
  );
  return LibraryCard;
}
