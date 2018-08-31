const mongoose = require('mongoose');

const blogSchema = new Schema({
  title: String,
  description: String,
  photo: String,
  slug: String,
  createdAt: Date,
  type: {
    work: String,
    play: String,
    happening: String,
    all: String,
    spaces: String,
    faces: String,
    places: String

  }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
