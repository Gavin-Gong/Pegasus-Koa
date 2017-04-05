const _ = require('lodash');
const faker = require('faker');

// faker.locale = "zh_CN";

module.exports = () => {
  return {
    // posts data
    posts: _.times(100, (n) => {
      return {
        id: n,
        name: faker.name.findName(),
        avatar: faker.internet.avatar(),
        body: faker.lorem.lines(),
        summary: faker.lorem.paragraph(6),
        mark: faker.lorem.paragraphs(4),
        banner: faker.image.image(500, 200),
        created_at: faker.date.between(new Date(2017, 0, 1), new Date()),
        tags: _.times(3, (n) => {
          return {
            id: n,
            title: faker.lorem.word(),
            summary: faker.lorem.sentence(30),
          };
        }),
      };
    }),
    tags: _.times(1, (n) => {
      return {
        id: n,
      };
    }),
    topics: _.times(1, (n) => {
      return {
        id: n,
      };
    }),
    archives: _.times(1, (n) => {
      return {
        id: n,
      };
    }),
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