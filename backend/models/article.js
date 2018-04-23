const mongoose = require('mongoose');

// User.
let Article = mongoose.model('Article', {
  header_img: {
    rowType: String,
    src: String,
    fileName: String,
    caption: String
  },
  title: String,
  description: String,
  author: String,
  date: Number,
  categories: [String],
  rows: {
    type: Array,
    default: []
  }
});

module.exports = Article;