const jsonServer = require('json-server')
const faker = require('faker');
const server = jsonServer.create()
const router = jsonServer.router('./data/db.json')

// const data = { users: [] }
//   // Create 1000 users
//   for (let i = 0; i < 1000; i++) {
//     data.users.push({ id: i, name: `user${i}` })
// }

// server.use(router)
// server.listen(process.env.PORT || 3000, () => {
//   console.log(`JSON Server is running at ${process.env.PORT|| 3000}`)
// })














const exec = require('child_process').exec;
const port = process.env.PORT || 3000;
exec(`json-server ./data/db.js --port ${port}`, (err, stdin, stdout) => {
  console.log(stdout);
  console.log(stdin);
});