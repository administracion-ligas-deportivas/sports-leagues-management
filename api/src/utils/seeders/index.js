const { getFakeTimeStamps } = require("../fakeDataGenerators/timestamps");

const getElementsWithFakeTimestamps = (elements, isCamelCase = false) => {
  const timestamps = getFakeTimeStamps(isCamelCase);

  return elements.map((element) => {
    return {
      ...element,
      ...timestamps,
    };
  });
};

module.exports = {
  getElementsWithFakeTimestamps,
};
