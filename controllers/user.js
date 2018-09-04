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

exports.getAllUsers = (req, res) => {
  User.find({}, (error, users) => {
    if (error) {
      res.json({
        message: "Server error, Please try after some time.",
        status: 500
      });
    }
    if (users) {
      res.json({
        data: users,
        message: "All users fetched",
        status: 200
      });
    } else {
      res.json({
        message: "No data found",
        status: 200
      });
    }
  });
};

exports.getAllUserById = (req, res) => {
  User.findById(req.params.id, (err, users) => {
    if (err) {
      res.json({
        message: "Server error, Please try after some time.",
        status: 500
      });
    }
    if (users) {
      res.json({
        data: users,
        message: "User data fetched successfully",
        status: 200
      });
    } else {
      res.json({
        message: "No data found",
        status: 200
      });
    }
  });
};
