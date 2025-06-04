import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

// Define an interface for the attributes
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
      },
      author: {
        type: DataTypes.STRING,
      },
      isbn: {
        type: DataTypes.STRING,
      },
      pages: {
        type: DataTypes.INTEGER,
      },
      edition: {
        type: DataTypes.INTEGER,
      },
      is_paperback: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      // Manually define the table name
      tableName: 'book',
      // Set to false to remove the `created_at` and `updated_at` columns
      timestamps: false,
      underscored: true,
      freezeTableName: true,
    }
  );

  return Book;
}
