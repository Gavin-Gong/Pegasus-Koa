import * as KoaRouter from 'koa-router';
import * as article from '../controllers/article';

import { Context } from 'koa';

let router = new KoaRouter()

router
  .get('/articles', (ctx: Context, next: Function) => {
    ctx.body = "article routers";
    next();
  })
router.post('/articles', (ctx: Context, next: Function) => {
  article.create(ctx, next)
  ctx.body = "article routers";
});
router.get('/lab', async(ctx: Context, next: Function) => {
  ctx.body = 'JSON.stringify(ctx)'
  await next()
})

export default router;