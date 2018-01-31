const mongoose = require('mongoose');

// User.
var ArticleCategory = mongoose.model('ArticleCategory', {
  icon: String,
  title: String,
  description: String  
});

module.exports = ArticleCategory;