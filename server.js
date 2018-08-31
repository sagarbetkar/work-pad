const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(3000);
