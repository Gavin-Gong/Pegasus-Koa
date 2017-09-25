import * as Koa from 'koa';
import * as bodyparse from 'koa-bodyparser'
import * as logger from 'koa-logger';
import * as mongoose from 'mongoose';
import config from './config';
import router from './route';

// types
import {
  Context
} from 'koa'

const app = new Koa();

// database connect
const db = mongoose.connect(config.mongodb);
mongoose.connection.on('error', err => {
  console.error('conneect mongodb fail\n', err);
})
mongoose.connection.once('open', () => {
  console.log('connected to mongodb!');
});

app.use(bodyparse())

// route
app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(logger());

// listen on port 8890
app.listen(8890, () => {
  console.log('The server is listening on port 8890!');
});

export {}