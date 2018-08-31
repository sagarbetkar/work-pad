const mongoose = require('mongoose');

const reviewSchema = new Schema ({
  name: String,
  title: String,
  comment: String,
  rating: Number,
  slug: String,
  latitude: Number,
  longitude: Number,
});

const Review = mongoose.model('Review', userSchema);

module.exports = Review;
