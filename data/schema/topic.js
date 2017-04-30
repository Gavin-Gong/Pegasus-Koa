const _ = require('lodash');
const faker = require('faker');
const postSchema = require('./post');
faker.locale = "zh_CN";

module.exports = (times) => {
  return _.times(times, (n) => {
    return {
      id: n,
      title: faker.lorem.sentence(),
      banner: `${faker.image.image(920, 240)}?id=${n}`,
      descrption: faker.lorem.lines(10),
      summary: faker.lorem.paragraph(6),
      created_at: faker.date.between(new Date(2017, 0, 1), new Date()),
      posts: postSchema(10),
      post_count: faker.random.number(20),
    };
  });
}