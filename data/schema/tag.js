const _ = require('lodash');
const faker = require('faker');
const postSchema = require('./post');

faker.locale = "zh_CN";

module.exports = (times) => {
  return _.times(times, (n) => {
    let post_count = faker.random.number(20);
    return {
      id: n,
      created_at: faker.date.between(new Date(2017, 0, 1), new Date()),
      title: faker.lorem.word(),
      post_count,
      posts: postSchema(post_count),
      banner: `${faker.image.image(920, 240)}?id=${n}`,
    };
  });
}