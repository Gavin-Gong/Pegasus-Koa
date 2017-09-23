const router = require('koa-router')();

const article = require('../controllers/article');

console.log('controller', article);
router
  .get('/articles', (ctx:any,  next:any) => {
    ctx.body = "article routers";
    next();
  })
router.post('/articles', (ctx:any, next:any) => {
  article.create(ctx, next)
  ctx.body = "article routers";
  // next()
});
router.get('/lab', async (ctx: any, next: any) => {
  ctx.body = 'JSON.stringify(ctx)'
  await next()
  // ctx.body = 'gg'
})

module.exports = router;