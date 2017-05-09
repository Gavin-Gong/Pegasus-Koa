let faker = require('faker/locale/zh_CN');

const md = {
  genList() {}
};


faker.lorem.markdown = function() {
  return `
    ### ${faker.lorem.sentence(60)}

  `
};

