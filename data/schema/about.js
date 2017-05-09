const _ = require('lodash');
const faker = require('faker');
faker.locale = "zh_CN";

var htmlCodes = [
'夏阳开始自己招聘开发人员了，没多久也就招到了一个合适的人员，春晓提出将现有的工作移交出来，就在移交会上，夏阳又开始怒气冲天的将春晓奚落一顿，春晓强压怒火做了回应，并拿出证据证明夏阳的一些怀疑是多余的，其实他真的为这个项目做了很多工作，最后夏阳也恢复平静，意识到了自己的一些问题。',
'一切都来的太晚，春晓觉得受了很大的委屈，同时也觉得这个公司的制度过于僵化，不利于他个人的发展，在工作移交完成后，提出了离职，自己创业去了。',
'冬雪的部门承接了这个项目，没有受到任何激励，反倒干走了一名很牛的员工，也是痛苦不已。',
'秋风看到这样的结局，也不愿意再提起这个项目了。'
].join("\n\r");

module.exports = () => {
  return {
    body: htmlCodes,
    created_at: faker.date.between(new Date(2017, 0, 1), new Date(2017, 3, 11)),
    updated_at: faker.date.between(new Date(2017, 3, 11), new Date()),
    avatar: faker.random.image(100, 100),
  };
}