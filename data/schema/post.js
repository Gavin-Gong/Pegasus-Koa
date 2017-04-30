const _ = require('lodash');
const faker = require('faker');
// const topicSchema = require('./topic');
faker.locale = "zh_CN";
// console.log('schema', topicSchema)
module.exports = (times) => {
  return _.times(times, (n) => {
    return {
      id: n,
      title: faker.lorem.words(10),
      banner: `${faker.image.image(920, 240)}?id=${n}`,
      body: faker.lorem.paragraphs(20),
      summary: faker.lorem.paragraph(6),
      created_at: faker.date.between(new Date(2017, 0, 1), new Date()),
      avatar: faker.internet.avatar(),
      mark: faker.lorem.paragraphs(4),
      view_count: faker.random.number(100),
      topic: {
        id: n,
        title: faker.lorem.sentence(10),
        banner: `${faker.image.image(920, 240)}?id=${n}`,
        descrption: faker.lorem.lines(10),
        summary: faker.lorem.paragraph(6),
        created_at: faker.date.between(new Date(2017, 0, 1), new Date()),
      },
      tags: _.times(3, (n) => {
        return {
          id: n,
          title: faker.lorem.word(),
          summary: faker.lorem.sentence(30),
        };
      }),
      // topic: topicSchema(1),
    };
  });
}