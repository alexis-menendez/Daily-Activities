import {
  Model,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
  DataTypes,
  type Sequelize,
} from 'sequelize';

/*
! Author Model using our own interfaces

import { DataTypes, Sequelize, Model, Optional } from 'sequelize'

interface AuthorAttributes {
  id: number;
  name: string;
  bio: string;
}

interface AuthorCreationAttributes extends Optional<AuthorAttributes, 'id'> {}

export class Author extends Model<AuthorAttributes, AuthorCreationAttributes> implements AuthorAttributes {
  declare id: number;
  declare name: string;
  declare bio: string;
}

*/

export class Author extends Model<
  InferAttributes<Author>,
  InferCreationAttributes<Author>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare bio: string;
}

export function AuthorFactory(sequelize: Sequelize) {
  Author.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bio: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      underscored: true,
      modelName: 'author',
    }
  );

  return Author;
}
