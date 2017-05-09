const jsonServer = require('json-server')
const faker = require('faker');
const server = jsonServer.create()
const db = require('./data/db.js');
const router = jsonServer.router(db());
const middlewares = jsonServer.defaults();
const imgList = require('./data/imgList');


// server.get('/custom', (req, res) => {
//   res.json('')
// });

// server.use(jsonServer.rewriter({
//   '/api/': '/posts/',
// }));
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.created_at = Date.now();
    if (req.body.banner === '') {
      req.body.banner = imgList[faker.random.number(20)];
    }
  }
  next()
});

server.use(middlewares);
server.use(router);
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running at ${port}`);
});