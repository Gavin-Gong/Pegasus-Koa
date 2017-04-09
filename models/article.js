const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  title: String,
  created_at: Date,
});

// static method
articleSchema.methods.getArticle = () => {
  console.log(this);
};

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;