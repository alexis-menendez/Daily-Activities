import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
  numberOfPets: number;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public numberOfPets!: number;

  // This instance method uses a conditional statement to check if a user has pets
  hasPets() {
    if (this.numberOfPets > 0) {
      return true;
    } else {
      return false;
    }
  }
}

export function UserFactory(sequelize: Sequelize): typeof User {
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
      },
      numberOfPets: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    {
      tableName: 'users',
      sequelize,
      timestamps: false,
    }
  );

  return User;
}
