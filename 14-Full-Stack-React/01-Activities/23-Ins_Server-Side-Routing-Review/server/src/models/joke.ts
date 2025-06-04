import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

// Define the attributes for Joke
interface JokeAttributes {
    id: number;
    jokeTeller: string;
    joke: string;
}

// Optional attributes when creating a new Joke entry
interface JokeCreationAttributes extends Optional<JokeAttributes, 'id'> { }

export class Joke extends Model<JokeAttributes, JokeCreationAttributes> implements JokeAttributes {
    public id!: number;
    public jokeTeller!: string;
    public joke!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// Function to initialize the Joke model in Sequelize
export function JokeFactory(sequelize: Sequelize): typeof Joke {
    Joke.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            jokeTeller: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            joke: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
        },
        {
            tableName: 'jokes',  // Set the table name in the database
            sequelize,           // Pass the Sequelize instance
        }
    );

    return Joke;  // Return the initialized Joke model
}
