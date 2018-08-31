const Space = require('../models/space');

exports.getAllSpace = (req, res) => {
  Space.find({}, (err, spaces) => {
    if (err) {
      res.json({
        message: "Server error, Please try after some time.",
        status: 500
      });
    }
    if (spaces) {
      res.json({
        data: spaces,
        message: "Spaces data Fetched successfully",
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

exports.getSingleSpaceById = (req, res) => {
  Space.findById(req.params.id, (err, spaces) => {
    if (err) {
      res.json({
        message: "Server error, Please try after some time.",
        status: 500
      });
    }
    if (spaces) {
      res.json({
        data: spaces,
        message: "Space data fetched successfully",
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

exports.postNewSpace = (req, res) => {
  console.log(req.body);
  let {
    name,
    slug,
    anemities,
    size,
    address,
    timing,
    social,
    createdAt,
    modifiedBy
  } = req.body;

  var space = new Space({
    name,
    slug,
    anemities,
    size,
    address,
    timing,
    social,
    createdAt,
    modifiedBy
  });
  space.save().then((space) => {
    console.log('Added successfully');
    res.json(space);
  });
};

exports.updateSpaceById = (req, res) => {
  const {
    name,
    slug,
    anemities,
    size,
    address,
    timing,
    social,
    createdAt,
    modifiedBy
  } = req.body;
  Space.update({
    _id: req.params.id
  }, {
    name,
    slug,
    anemities,
    size,
    address,
    timing,
    social,
    createdAt,
    modifiedBy
  }, {}, (error, space) => {
    if (error)
      res.json({
        error: error,
        status: 500
      })
    res.json(space)
  });
};

exports.deleteSpaceById =  (request, response) => {
    Space.findOneAndDelete({ _id: request.params.id }, (error, deleteId) => {
        if (error)
            response.json({
                error: error,
                status: 500
            });
        response.json({ message: "deleted successfully" });
    });

};
