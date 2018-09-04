/**
 * Module dependencies.
 */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

/**
 * Controllers (route handlers).
 */
  const spaceController = require('./controllers/space');
  const userController = require('./controllers/user');

/**
 * Create Express server.
 */
const app = express();
/**
 * bodyParser usage
 */
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
/**
 * Connect to MongoDB.
 */
mongoose.connect('mongodb://localhost:27017/work-pad');
mongoose.connection.on('error', (error) => console.error(error));
mongoose.connection.on('open', () => console.log("Success in connecting to mongodb"));

/**
 * Primary app routes.
 */
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/v1/spaces', spaceController.getAllSpace);
app.get('/api/v1/spaces/:id', spaceController.getSingleSpaceById);
app.post('/api/v1/spaces', spaceController.postNewSpace);
app.put('/api/v1/spaces/:id', spaceController.updateSpaceById);
app.delete('/api/v1/spaces/:id', spaceController.deleteSpaceById);

app.post('/api/v1/users', userController.postNewUser);
app.get('/api/v1/users', userController.getAllUsers);

app.listen(3000);
