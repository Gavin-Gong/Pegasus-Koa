const router = require('koa-router')();

const article = require('../controllers/article');

console.log('controller', article);
router
  .get('/articles', (ctx,  next) => {
    ctx.body = "article router";
    next();
  })
router.post('/articles', article.create);

module.exports = router;