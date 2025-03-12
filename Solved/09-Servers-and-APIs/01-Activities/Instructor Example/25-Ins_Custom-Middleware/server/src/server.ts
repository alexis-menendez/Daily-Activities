import express from 'express';
import allRoutes from './routes/index.js';
import logMethod from './middleware/logMethod.js';

const app = express();

const PORT = process.env.PORT || 3001;

// express middleware lives between the incoming request and outgoing response.
// Middleware can be attached to the express application using the `app.use()` method.
// Several types of middleware are avaialble, and we can create out own custom versions as well.

//The `express.json()` middleware attaches incoming json data from requests to the `req.body` property.
app.use(express.json());
//The `express.urlencoded()` middleware works similarly, but for form encoded data.
app.use(express.urlencoded({ extended: true }));
//`logMethod` is a custom piece of middleware, we can attach it to all routes like this.
app.use(logMethod);
// `express.static` tells express to look for matching static files in the provided folder and responding with it.
// This means we do not need to write explicit routes for every static asset
// Note the filepath here assumes we are starting directly within the `server` folder.
app.use(express.static('../client/dist'));
//Finally, we can use an imported router object like middleware, to attached the router's routes to our application.
app.use(allRoutes);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
