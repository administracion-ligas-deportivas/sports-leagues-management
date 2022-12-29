import { faker } from "@faker-js/faker";

const getTimeStamps = (isCamelCase = true) => {
  const createdAt = faker.date.past();
  const updatedAt = new Date(Date.now());

  const timestamps = isCamelCase
    ? { createdAt, updatedAt }
    : { created_at: createdAt, updated_at: updatedAt };

  return timestamps;
};

export { getTimeStamps };
