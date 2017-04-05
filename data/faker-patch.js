let faker = require('faker');

const md = {
  genList() {}
};


faker.lorem.markdown = function() {
  return `
    ### ${faker.lorem.sentence(60)}

  `
};

