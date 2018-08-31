const Space = require('../models/space');

exports.getAllSpace = (req, res) => {

};

exports.postNewSpace = (req, res) => {
    let { name, slug, anemities, size, address, timing, social, createdAt, modifiedBy } = req.body;
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
    })
    space.save().then((space) => {
      console.log('Added successfully')
      res.json(space);
    })
};
