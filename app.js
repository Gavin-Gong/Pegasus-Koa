const Koa = require('koa');
const logger = require('koa-logger');
const mongoose = require('mongoose');
const config = require('./config');
const router = require('./route');
require('./controllers/article');
const app = new Koa();

const db = mongoose.connect(config.mongodb);
mongoose.connection.on('error', (err) => {
  console.error('conneect mongodb fail\n', err);
})
mongoose.connection.once('open', () => {
  console.log('connected to mongodb!');
});


// mongoose.connect.on('error', console.error);
// response
app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(logger());

app.listen(8890, () => {
  console.log('The server is listening on port 8890!');
});