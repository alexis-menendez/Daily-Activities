import {
  Model,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
  DataTypes,
  type Sequelize,
} from 'sequelize';
import bcrypt from 'bcrypt';

/*
! Reader Model using our own interfaces

import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
interface ReaderAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface ReaderCreationAttributes extends Optional<ReaderAttributes, 'id'> {}

export class Reader extends Model<ReaderAttributes, ReaderCreationAttributes> implements ReaderAttributes {
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;

  async setPassword(newPassword: string): Promise<void> {
    this.password = await bcrypt.hash(newPassword, 10);
  }

  checkPassword(loginPw: string): Promise<boolean> {
    return bcrypt.compare(loginPw, this.password);
  }
}

*/

export class Reader extends Model<
  InferAttributes<Reader>,
  InferCreationAttributes<Reader>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare email: string;
  declare password: string;

  async setPassword(newPassword: string): Promise<void> {
    this.password = await bcrypt.hash(newPassword, 10);
  }

  checkPassword(loginPw: string): Promise<boolean> {
    return bcrypt.compare(loginPw, this.password);
  }
}

export function ReaderFactory(sequelize: Sequelize) {
  Reader.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Please enter a password',
          },
          len: {
            args: [8, 20],
            msg: 'Your password must be between 8 and 20 characters',
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate: async (newReader) => {
          try {
            await newReader.setPassword(newReader.password);
          } catch (err) {
            console.log(err);
          }
        },
        beforeUpdate: async (updatedReader) => {
          try {
            await updatedReader.setPassword(updatedReader.password);
          } catch (err) {
            console.log(err);
          }
        },
      },
      sequelize,
      timestamps: false,
      underscored: true,
      modelName: 'reader',
    }
  );
  return Reader;
}
