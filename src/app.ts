const Koa = require('koa');
const logger = require('koa-logger');
const mongoose = require('mongoose');
const config = require('./config');
const router = require('./route');
require('./controllers/article');
const app = new Koa();

const db = mongoose.connect(config.mongodb);
mongoose.connection.on('error', (err: any) => {
  console.error('conneect mongodb fail\n', err);
})
mongoose.connection.once('open', () => {
  console.log('connected to mongodb!');
});

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(logger());

app.use(async (ctx: any, next: any) => {
  console.log(JSON.stringify(ctx))
  await next()
})
app.listen(8890, async (ctx: any) => {
  console.log(JSON.stringify(ctx));
  console.log('The server is listening on port 8890!');
});

export {}
