const jsonServer = require('json-server')
const server = jsonServer.create()
const db = require('./data/db.js');
const router = jsonServer.router(db());
const middlewares = jsonServer.defaults();


server.use(middlewares);
server.use(router);
console.log(process.env.PORT);
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running at ${port}`);
});