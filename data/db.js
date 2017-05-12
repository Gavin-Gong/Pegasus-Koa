const _ = require('lodash');
const faker = require('faker/locale/zh_CN');
const postSchema = require('./schema/post');
const tagSchema = require('./schema/tag');
const topicSchema = require('./schema/topic');
const aboutSchema = require('./schema/about');
// console.log(postSchema(100));
faker.locale = "zh_CN";

module.exports = () => {
  return {
    // posts data
    posts: postSchema(100),
    tags: tagSchema(20),
    topics: topicSchema(20),
    profile: {
      name: faker.name.findName(),
      address: faker.address.city(),
      bio: faker.lorem.sentence(),
      avatar: faker.image.avatar(100, 100),
      post_count: faker.random.number(20, 100),
      streak_day_count: faker.random.number(10, 1000),
      socials: [
        {
          type: 'github',
          url: 'https://github.com/gavin-gong',
        },
        {
          type: 'weibo',
          url: 'https://github.com/gavin-gong',
        },
        {
          type: 'dribbble',
          url: 'https://dribbble.com/gavin-gong',
        },
        {
          type: 'twitter',
          url: 'https://github.com/gavin-gong',
        },
      ],
      email: 'kefengong@gmail.com',
      intro: faker.lorem.paragraphs(10),
      job: 'UI 设计师'
    },
    about: aboutSchema(),
    settings: {

    },
    comments: [
      {},
    ],
    statistics: {
      post_count: faker.random.number(100) + 8,
      word_count: 10000 + faker.random.number(10000),
      streak_week_count: faker.random.number(2) + 1,
      yesterday: _.times(24, (n) => {
        return {
          user_count: faker.random.number(100) + 10,
          visit_count: faker.random.number(100) + 20,
        };
      }),
      week_post_statistics: _.times(12, (n) => {
        return faker.random.number(100) + 2;        
      }),
    },
  };
};