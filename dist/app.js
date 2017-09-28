"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const bodyparse = require("koa-bodyparser");
const logger = require("koa-logger");
const mongoose = require("mongoose");
const config_1 = require("./config");
const route_1 = require("./route");
const app = new Koa();
// database connect
const db = mongoose.connect(config_1.default.mongodb);
mongoose.connection.on('error', err => {
    console.error('conneect mongodb fail\n', err);
});
mongoose.connection.once('open', () => {
    console.log('connected to mongodb!');
});
app.use(bodyparse());
// route
app
    .use(route_1.default.routes())
    .use(route_1.default.allowedMethods())
    .use(logger());
// listen on port 8890
app.listen(process.env.PORT || 8890, () => {
    console.log('The server is listening on port 8890!');
});
//# sourceMappingURL=app.js.map