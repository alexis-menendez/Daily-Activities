import express from 'express';
// TODO: Uncomment the following code once you have built the queries and mutations in the client folder
// import { ApolloServer } from '@apollo/server';
// import { expressMiddleware } from '@apollo/server/express4';
import path from 'path';

// TODO: Uncomment the following code once you have built the queries and mutations in the client folder
// import { typeDefs, resolvers } from './schemas/index.js';
import db from './config/connection.js';

// TODO: Comment out this code once you have built out queries and mutations in the client folder
import routes from './routes/index.js';

const PORT = process.env.PORT || 3001;
const app = express();

// TODO: Uncomment the following code once you have built the queries and mutations in the client folder
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// TODO: Uncomment the following code once you have built the queries and mutations in the client folder
// const startApolloServer = async () => {
//   await server.start();
  
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  
  // TODO: Uncomment the following code once you have built the queries and mutations in the client folder
  // app.use('/graphql', expressMiddleware(server));

  // TODO: Comment out this code once you have built out queries and mutations in the client folder
  app.use(routes);

  // if we're in production, serve client/dist as static assets
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    // TODO: Uncomment this code once you have built out queries and mutations in the client folder
    // app.get('*', (_req, res) => {
    //   res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    // });
  }
  
  // TODO: Uncomment this code once you have built out queries and mutations in the client folder
  // db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  // app.listen(PORT, () => {
  //   console.log(`API server running on port ${PORT}!`);
  //   console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  // });
// };

// TODO: Comment out this code once you have built out queries and mutations in the client folder
db.once('open', () => {
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});

// TODO: Uncomment the following code once you have built the queries and mutations in the client folder
// startApolloServer();
