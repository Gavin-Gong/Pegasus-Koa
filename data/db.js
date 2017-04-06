const _ = require('lodash');
const faker = require('faker');
const postSchema = require('./schema/post');
const tagSchema = require('./schema/tag');
// console.log(postSchema(100));
// faker.locale = "zh_CN";

module.exports = () => {
  return {
    // posts data
    posts: postSchema(100),
    tags: tagSchema(20),
    topics: _.times(1, (n) => {
      return {
        id: n,
      };
    }),
    archives:postSchema(100),
    profile: {
      name: faker.name.findName(),
      address: faker.address.city(),
      bio: faker.lorem.sentence(),
      avatar: faker.image.avatar(100, 100),
      posts_count: faker.random.number(20, 100),
      days_count: faker.random.number(10, 1000),
      socials: [
        {},
      ],
    },
    about: {

    },
    settings: {

    },
  };
};