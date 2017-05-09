const _ = require('lodash');
const faker = require('faker/locale/zh_CN');
const postSchema = require('./post');
const imgList = require('../imgList');

faker.locale = "zh_CN";
const tagArr = [
  '随感',
  '日记',
  'Code',
  '诗歌',
  'Psy',
  'ES6',
  'PS',
  'AI',
  'CDR',
  '配色',
  'UI',
  'UX',
  'Matarial Design',
  '规范',
  'Markdown',
  'PPT',
  '原型',
  'Logo',
];


module.exports = (times) => {
  return _.times(times, (n) => {
    let post_count = faker.random.number(20);
    return {
      id: n,
      created_at: faker.date.between(new Date(2017, 0, 1), new Date()),
      title: tagArr[n] ? tagArr[n] : faker.lorem.word(),
      post_count,
      posts: postSchema(post_count),
      banner: imgList[faker.random.number(20)],
    };
  });
}