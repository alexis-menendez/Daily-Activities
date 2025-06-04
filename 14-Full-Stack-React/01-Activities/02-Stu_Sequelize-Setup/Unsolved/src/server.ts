import express from 'express';

// TODO: Import the Sequelize connection object

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TODO: Connect to the database before starting the Express.js server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
