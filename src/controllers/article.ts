const articleModel = require('../models/article');

  exports.getArticleList = (ctx:any, next:any) => {
    ctx.body = "my router";
    next();
  }
  exports.create = (ctx:any, next:any) => { 
    const newArticle = new articleModel({title: `new article-${new Date()}`});
    newArticle.save((err:any) => {
      if (err) throw err;
      console.log("saved a article");
      console.log(this);
    })
    next();
  }
