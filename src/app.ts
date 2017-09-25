import * as Koa from 'koa';
import * as logger from 'koa-logger';
import * as mongoose from 'mongoose';
import config from './config';
import router from './route';

// type
import {
  Context
} from 'koa'

const app = new Koa();

const db = mongoose.connect(config.mongodb);
mongoose.connection.on('error', err => {
  console.error('conneect mongodb fail\n', err);
})
mongoose.connection.once('open', () => {
  console.log('connected to mongodb!');
});

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(logger());

app.use(async(ctx: Context, next: Function) => {
  await next()
})
app.listen(8890, () => {
  console.log('The server is listening on port 8890!');
});

export {}