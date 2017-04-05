const jsonServer = require('json-server')
const faker = require('faker');
const server = jsonServer.create()
const db = require('./data/db');
console.log(db);
const router = jsonServer.router(db());


server.use(router)
console.log(process.env.PORT);
server.listen(3000, () => {
  console.log(`JSON Server is running at ${process.env.PORT || 3000}`)
})














// const exec = require('child_process').exec;
// const port = process.env.PORT || 3000;
// console.log();
// exec(`json-server ./data/db.js --port ${port}`, (err, stdin, stdout) => {
//   console.log(stdout);
//   console.log(stdin);
// });