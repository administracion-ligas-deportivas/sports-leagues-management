const { getTimeStamps } = require("./fakeDataGenerators/timestamps");

// Si no pongo que options sea un arreglo vacío, da error con isCamelCase porque
// es undefined.
const getElementsWithTimestamps = (elements, options = {}) => {
  const { isCamelCase = false } = options;
  const { createdAt, updatedAt } = getTimeStamps();

  return elements.map((element) => {
    const timestamps = isCamelCase
      ? { createdAt, updatedAt }
      : { created_at: createdAt, updated_at: updatedAt };

    return {
      ...element,
      ...timestamps,
    };
  });
};

module.exports = {
  getElementsWithTimestamps,
};
