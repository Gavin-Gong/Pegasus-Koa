import * as mongoose  from 'mongoose';

// define Schema
const articleSchema = new mongoose.Schema({
  title: String,
  body: String,
  background: {
    default: '',
    type: String
  },
  created_at: {type: Date, default: Date.now()},
  update_at: {type: Date, default: Date.now()},
  author: {},
  comments: {
    type: Array,
    default: []
  },

  // status
  status: {
    type: String,
    default: 'release',
    enum: ['release', 'draft', 'del']
  }
});

// define Model
const Article = mongoose.model("articles", articleSchema);

export default Article;
