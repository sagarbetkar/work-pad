const Review = require('../models/review');

exports.postNewReview = (req, res) => {
  let{
    name,
    title,
    comment,
    rating,
    slug,
    latitude,
    longitude,
    createdAt
  } = req.body;
  var review = new Review ({
    name,
    title,
    comment,
    rating,
    slug,
    latitude,
    longitude,
    createdAt
  });
  review.save().then((review) => {
    console.log('Added successfully');
    res.json(review);
  });
};

exports.getAllReviews = (req, res) => {
  Review.find({}, (error, reviews) => {
    if (error) {
      res.json({
        message: "Server error, Please try after some time.",
        status: 500
      });
    }
    if (reviews) {
      res.json ({
        data: reviews,
        message: "All reviews fetched",
        status: 200
      });
    } else {
      res.json({
        message: "No data found",
        status: 200
      });
    }
  });
}
