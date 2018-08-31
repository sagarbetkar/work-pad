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

/**
 * Create Express server.
 */
const app = express();

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
app.post('/api/v1/spaces', spaceController.postNewSpace);


app.listen(3000);
