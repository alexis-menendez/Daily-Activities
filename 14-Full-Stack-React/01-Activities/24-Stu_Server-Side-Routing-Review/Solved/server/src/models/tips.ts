import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';

interface TipAttributes {
  id: number;
  username: string;
  topic: string;
  tip: string;
}

interface TipCreationAttributes extends Optional<TipAttributes, 'id'> {}

export class Tip
  extends Model<TipAttributes, TipCreationAttributes>
  implements TipAttributes
{
  public id!: number;
  public username!: string;
  public topic!: string;
  public tip!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function TipFactory(sequelize: Sequelize): typeof Tip {
  Tip.init(
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
      topic: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'UX',
      },
      tip: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      tableName: 'tips',
      sequelize,
    }
  );

  return Tip;
}
