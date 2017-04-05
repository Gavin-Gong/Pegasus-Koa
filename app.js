const Koa = require('koa');
const logger = require('koa-logger');
const mongoose = require('mongoose');
const config = require('./config');



const app = new Koa();
mongoose.connect(config.mongodb);
// mongoose.connect.on('error', console.error);

// response
app
  .use(logger())  
  .use(ctx => {
    ctx.body = this;
});

app.listen(3000, () => {
  console.log('The server is listening on port 3000!');
});