const Blog = require('../models/blog');

exports.postNewBlog = (req, res) => {
  const {
    title,
    description,
    photo,
    slug,
    createdAt,
    type
  } = req.body;
  var blog = new Blog({
    title,
    description,
    photo,
    slug,
    createdAt,
    type
  });
  blog.save().then((blog) => {
    console.log('Added successfully');
    res.json(blog);
  });
};

exports.getAllBlogs = (req, res) => {
  Blog.find({}, (error, blogs) => {
    if (error) {
      res.json({
        message: "Server error, Please try after some time.",
        status: 500
      });
    }
    if (blogs) {
      res.json({
        data: blogs,
        message: "All blogs fetched",
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

exports.getBlogById = (req, res) => {
  Blog.findById(req.params.id, (err, blogs) => {
    if (err) {
      res.json({
        message: "Server error, Please try after some time.",
        status: 500
      });
    }
    if (blogs) {
      res.json({
        data: blogs,
        message: "Blog data fetched successfully",
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


exports.updateBlogById = (req, res) => {
  console.log(req.body);
  const {
    title,
    description,
    photo,
    slug,
    type
  } = req.body;
  Blog.update({
    _id: req.params.id
  }, {
    title,
    description,
    photo,
    slug,
    type
  }, {}, (error, blog) => {
    if (error)
      res.json({
        error: error,
        status: 500
      });
    console.log(error);
    res.json(blog);
  });
};

exports.deleteBlogById = (req, res) => {
  Blog.findOneAndDelete({
    _id: req.params.id
  }, (error, deleteId) => {
    if (error)
      res.json({
        error: error,
        status: 500
      });
    res.json({
      message: "Deleted successfully"
    });
  });
};
