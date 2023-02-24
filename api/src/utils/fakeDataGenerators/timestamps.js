const { faker } = require("@faker-js/faker");

const getFakeTimeStamps = (isCamelCase = true) => {
  const createdAt = faker.date.past();
  const updatedAt = new Date(Date.now());

  const timestamps = isCamelCase
    ? { createdAt, updatedAt }
    : { created_at: createdAt, updated_at: updatedAt };

  return timestamps;
};

module.exports = {
  getFakeTimeStamps,
};
