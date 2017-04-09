const articleModel = require('../models/article');

// module.exprots = {
  exports.getArticleList = (ctx, next) => {
    ctx.body = "my router";
    next();
  }
  exports.create = (ctx, next) => { 
    const newArticle = new articleModel({title: `new article-${new Date()}`});
    newArticle.save((err) => {
      if (err) throw err;
      console.log('saved a article');
      console.log(this);
    })
    next();
  }
// };