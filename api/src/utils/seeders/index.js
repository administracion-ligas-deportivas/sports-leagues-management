import { getTimeStamps } from "../fakeDataGenerators/timestamps";

const getElementsWithTimestamps = (elements, isCamelCase = false) => {
  const timestamps = getTimeStamps(isCamelCase);

  return elements.map((element) => {
    return {
      ...element,
      ...timestamps,
    };
  });
};

export { getElementsWithTimestamps };
