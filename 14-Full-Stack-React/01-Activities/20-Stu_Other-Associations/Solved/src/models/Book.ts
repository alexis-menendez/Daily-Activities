import {
  Model,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
  DataTypes,
  type ForeignKey,
  type BelongsToManyAddAssociationMixin,
  type Sequelize,
} from 'sequelize';

import type { Reader } from './Reader.js';
import type { Author } from './Author.js';

/*
! Book Model using our own interfaces

import { DataTypes, Sequelize, Model, Optional } from 'sequelize'

interface BookAttributes {
  id: number;
  authorId: number;
  title: string;
  isbn: string;
  pages: number;
  edition: number;
  isPaperback: boolean;
}

interface BookCreationAttributes extends Optional<BookAttributes, 'id'> {}

export class Book extends Model<BookAttributes, BookCreationAttributes> implements BookAttributes {
  declare id: number;
  declare authorId: number;
  declare title: string;
  declare isbn: string;
  declare pages: number;
  declare edition: number;
  declare isPaperback: boolean;
}

*/

export class Book extends Model<
  InferAttributes<Book>,
  InferCreationAttributes<Book>
> {
  declare id: CreationOptional<number>;
  declare authorId: ForeignKey<Author['id']>;
  declare title: string;
  declare isbn: string;
  declare pages: number;
  declare edition: number;
  declare isPaperback: boolean;

  // ! Since TS cannot determine model associations at compile time, we need to declare the association methods here. These will not exist until `Model.init` was called.
  declare addReaders: BelongsToManyAddAssociationMixin<
    Reader[],
    Reader['id'][]
  >;
  declare addReader: BelongsToManyAddAssociationMixin<Reader, Reader['id']>;
}

export function BookFactory(sequelize: Sequelize) {
  Book.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isbn: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      pages: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      edition: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      isPaperback: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      underscored: true,
      modelName: 'book',
    }
  );

  return Book;
}
