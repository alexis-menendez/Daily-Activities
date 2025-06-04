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
! User Model using our own interfaces

import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';

interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  declare id: number;
  declare username: string;
  declare email: string;
  declare password: string;

  // Hash the password before saving the user
  async setPassword(password: string) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(password, saltRounds);
  }

  checkPassword(loginPassword: string) {
   return bcrypt.compareSync(loginPassword, this.password);
  }
}

*/

// ! User Model using sequelize's built-in types

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;
  declare username: string;
  declare email: string;
  declare password: string;

  async setPassword(newPassword: string): Promise<void> {
    this.password = await bcrypt.hash(newPassword, 10);
  }

  async checkPassword(loginPw: string): Promise<boolean> {
    const result = await bcrypt.compare(loginPw, this.password);
    return result;
  }
}

export function UserFactory(sequelize: Sequelize) {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
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
          // ! Now that we utilize hooks, we can include the password length validation here.
          len: {
            args: [8, 20],
            msg: 'Your password must be between 8 and 20 characters',
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate: async (newUserData) => {
          await newUserData.setPassword(newUserData.password);
        },
        beforeUpdate: async (updatedUserData) => {
          if (updatedUserData.password) {
            await updatedUserData.setPassword(updatedUserData.password);
          }
        },
      },
      sequelize,
      timestamps: false,
      underscored: true,
      modelName: 'user',
    }
  );

  return User;
}
