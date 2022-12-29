import { createRandomCancha, createRandomDeportivo } from "./deportivos";
import { createRandomUser } from "./usuarios";

const elementTypeMethods = {
  deportivos: createRandomDeportivo,
  canchas: createRandomCancha,
  usuarios: createRandomUser,
};

const createRandomElements = async (elementsType, length) => {
  if (!elementTypeMethods[elementsType]) {
    throw new Error(`No existe el elemento ${elementsType}`);
  }

  const method = elementTypeMethods[elementsType];

  return Promise.all(
    Array.from({ length }).map(async () => {
      return await method();
    })
  );
};

export { createRandomElements };
