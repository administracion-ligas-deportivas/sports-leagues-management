const { ENDPOINTS } = require("#src/constants/index.js");

/**
 * Obtener el número de endpoints "padres" en general. En caso de tener más de
 * un método, se cuenta como un solo endpoint.
 * @returns {number} Número de endpoints
 */
const countNumberOfParentEndpoints = () => {
  const endpoints = Object.keys(ENDPOINTS);

  return endpoints.length;
};

module.exports = {
  countNumberOfParentEndpoints,
};
