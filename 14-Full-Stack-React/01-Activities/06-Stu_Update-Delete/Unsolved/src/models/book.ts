import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface BookAttributes {
  book_id: number;
  title: string;
  author: string;
  isbn: string;
  pages: number;
  edition: number;
  is_paperback: boolean;
}

interface BookCreationAttributes extends Optional<BookAttributes, 'book_id'> {}

export class Book extends Model<BookAttributes, BookCreationAttributes> implements BookAttributes {
  public book_id!: number;
  public title!: string;
  public author!: string;
  public isbn!: string;
  public pages!: number;
  public edition!: number;
  public is_paperback!: boolean;
}

export function BookFactory(sequelize: Sequelize): typeof Book {
  Book.init(
    {
      book_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isbn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pages: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      edition: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      is_paperback: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'book',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  );

  return Book;
}
