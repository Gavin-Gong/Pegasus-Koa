import * as KoaRouter from 'koa-router';
import * as article from '../controllers/article';

// types
import {
  Context
} from 'koa';

let router = new KoaRouter()

// article route
router
  .get('/articles', article.get)
router.post('/articles', article.create);

// lab route
router.get('/lab', async(ctx: Context, next: Function) => {
   next()
})

export default router;