const { faker } = require("@faker-js/faker");

const getTimeStamps = () => {
  return {
    createdAt: faker.date.past(),
    updatedAt: new Date(Date.now()),
  };
};

module.exports = {
  getTimeStamps,
};
