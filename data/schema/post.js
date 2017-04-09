const _ = require('lodash');
const faker = require('faker');

// faker.locale = "zh_CN";

module.exports = (times) => {
  return _.times(times, (n) => {
    return {
      id: n,
      title: faker.name.findName(),
      banner: `${faker.image.image(500, 200)}?id=${n}`,
      body: faker.lorem.lines(),
      summary: faker.lorem.paragraph(6),
      created_at: faker.date.between(new Date(2017, 0, 1), new Date()),
      avatar: faker.internet.avatar(),
      mark: faker.lorem.paragraphs(4),
      tags: _.times(3, (n) => {
        return {
          id: n,
          title: faker.lorem.word(),
          summary: faker.lorem.sentence(30),
        };
      }),
    };
  });
}