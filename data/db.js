const _ = require('lodash');
const faker = require('faker');
const postSchema = require('./schema/post');
const tagSchema = require('./schema/tag');
const topicSchema = require('./schema/topic');
const aboutSchema = require('./schema/about');
// console.log(postSchema(100));
// faker.locale = "zh_CN";

module.exports = () => {
  return {
    // posts data
    posts: postSchema(100),
    tags: tagSchema(20),
    topics: topicSchema(20),
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
    about: aboutSchema(),
    settings: {

    },
  };
};