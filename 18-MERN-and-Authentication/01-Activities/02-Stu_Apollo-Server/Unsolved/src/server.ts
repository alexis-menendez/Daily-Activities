import express from 'express';
import db from './config/connection.js';

// TODO: Add a comment describing the functionality of this expression
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

// TODO: Add a comment describing the functionality of this expression
import { typeDefs, resolvers } from './schemas/index.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// TODO: Add a comment describing the functionality of this async function
const startApolloServer = async () => {
  await server.start();
  await db();

  const PORT = process.env.PORT || 3001;
  const app = express();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server));

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
};

// Call the async function to start the server
startApolloServer();
