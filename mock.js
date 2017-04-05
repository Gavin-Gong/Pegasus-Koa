const jsonServer = require('json-server')
const server = jsonServer.create()
const db = require('./data/db.js');
const router = jsonServer.router('./data/db.json');
const middlewares = jsonServer.defaults()
console.log(typeof db());



server.use(middlewares)
server.use(router)
console.log(process.env.PORT);
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running at ${port}`)
});


// const exec = require('child_process').exec;
// const port = process.env.PORT || 3000;
// console.log();
// exec(`json-server ./data/db.js --port ${port}`, (err, stdin, stdout) => {
//   console.log(stdout);
//   console.log(stdin);
// });