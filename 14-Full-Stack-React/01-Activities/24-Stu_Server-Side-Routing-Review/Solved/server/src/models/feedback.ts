import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';

interface FeedbackAttributes {
  id: number;
  email: string;
  feedbackType: string;
  feedback: string;
}

interface FeedbackCreationAttributes
  extends Optional<FeedbackAttributes, 'id'> {}

export class Feedback
  extends Model<FeedbackAttributes, FeedbackCreationAttributes>
  implements FeedbackAttributes
{
  public id!: number;
  public email!: string;
  public feedbackType!: string;
  public feedback!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function FeedbackFactory(sequelize: Sequelize): typeof Feedback {
  Feedback.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      feedbackType: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'user feedback',
      },
      feedback: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      tableName: 'feedbacks',
      sequelize,
    }
  );

  return Feedback;
}
