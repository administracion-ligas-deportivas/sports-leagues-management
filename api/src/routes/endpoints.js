const { ENDPOINTS } = require("#src/constants/index.js");
const {
  countNumberOfParentEndpoints,
} = require("#src/utils/endpoints/index.js");

const endpointsRouter = require("express").Router();

endpointsRouter.route("/").get((req, res) => {
  res.json({
    message: "Bienvenido a la API de Administración de Ligas Deportivas",
    lastUpdate: "Lunes, 23 de enero de 2023",
    parentEndpoints: {
      total: countNumberOfParentEndpoints(),
      endpoints: Object.keys(ENDPOINTS),
    },
    endpoints: [ENDPOINTS.usuarios],
  });
});

module.exports = { endpointsRouter };
