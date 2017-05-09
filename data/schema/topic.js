const _ = require('lodash');
const faker = require('faker');
const postSchema = require('./post');
const imgList = require('../imgList');

faker.locale = "zh_CN";

const titleArr = [
    'Workflow教程', 
    'Ps系列入门', 
    'HCI', 
    'chrome拓展推荐',
    'VPS 推荐',
    'AI教程',
    'CDR 教程',
  ];
// const desc

module.exports = (times) => {
  return _.times(times, (n) => {
    return {
      id: n,
      title: titleArr[n] ? titleArr[n] : faker.lorem.sentence(),
      banner: imgList[faker.random.number(20)],
      descrption: faker.lorem.lines(10),
      summary: faker.lorem.paragraph(6),
      created_at: faker.date.between(new Date(2017, 0, 1), new Date()),
      posts: postSchema(10),
      post_count: faker.random.number(20),
    };
  });
}