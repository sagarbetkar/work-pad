const User = require('../models/user');

exports.postNewUser = (req, res) => {
  let {
    firstName,
    lastName,
    email,
    password,
    facebook,
    google,
    createdAt,
    modifiedAt
  } = req.body;

  var user = new User ({
    firstName,
    lastName,
    email,
    password,
    facebook,
    google,
    createdAt,
    modifiedAt
  });
  user.save().then((user) => {
    console.log('Added successfully');
    res.json(user);
  })
};
