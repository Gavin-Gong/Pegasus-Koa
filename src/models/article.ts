/* tslint: disable */
const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  title: String,
  created_at: {type: Date, default: Date.now},
  body: String
});


// options
// new mongoose.Schema({}, {'options'})

//  method
articleSchema.methods.getArticle = () => {
  console.log(this);
};

// static
// articleSchema.static.methods = () => {}

// virtual getter
// articleSchema.virtual.get(() => {}).set(() => {});

// new Schema()

const Article = mongoose.model("article", articleSchema);

module.exports = Article;
