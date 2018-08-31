/**
 * Module dependencies.
 */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

/**
 * Create Express server.
 */
const app = express();

/**
 * Connect to MongoDB.
 */
mongoose.connect('mongodb://localhost/work-pad');

/**
 * Primary app routes.
 */
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000);
