const { getTimeStamps } = require("../fakeDataGenerators/timestamps");

const getElementsWithTimestamps = (elements, isCamelCase = false) => {
  const timestamps = getTimeStamps(isCamelCase);

  return elements.map((element) => {
    return {
      ...element,
      ...timestamps,
    };
  });
};

module.exports = {
  getElementsWithTimestamps,
};
