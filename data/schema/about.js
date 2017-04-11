const _ = require('lodash');
const faker = require('faker');
// faker.locale = "zh_CN";

module.exports = () => {
  return {
    body: faker.lorem.paragraphs(6),
    created_at: faker.date.between(new Date(2017, 0, 1), new Date(2017, 3, 11)),
    updated_at: faker.date.between(new Date(2017, 3, 11), new Date()),
    avatar: faker.random.image(100, 100),
  };
}