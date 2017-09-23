const articleModel = require('../models/article');

  exports.getArticleList = (ctx:any, next:any) => {
    ctx.body = "my router";
    next();
  }
  exports.create = async (ctx:any, next:any) => { 
    try {
      await articleModel.create({
        title: `title - ${Date.now()}`,
        body: `body, ${Math.random()}`
      })
    } catch(e) {
      throw e
    } finally {
      console.log('wow')
    }
    next();
  }
