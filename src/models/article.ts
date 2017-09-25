import * as mongoose  from 'mongoose';

const articleSchema = new mongoose.Schema({
  title: String,
  created_at: {type: Date, default: Date.now()},
  body: String
});


articleSchema.methods.getArticle = () => {
  console.log(this);
};

const Article = mongoose.model("article", articleSchema);

export default Article;
