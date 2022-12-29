import { faker } from "@faker-js/faker";
import { cancha } from "../db/models/index.js";

const getRandomCancha = async () => {
  const canchas = await cancha.findAll();
  return faker.helpers.arrayElement(canchas);
};

export { getRandomCancha };
