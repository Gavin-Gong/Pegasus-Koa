import * as mongoose  from 'mongoose';

// define Schema
const articleSchema = new mongoose.Schema({
  title: String,
  created_at: {type: Date, default: Date.now()},
  body: String
});

// define Methods
articleSchema.methods.getArticle = () => {
  console.log(this);
};

// define Model
const Article = mongoose.model("article", articleSchema);

export default Article;
