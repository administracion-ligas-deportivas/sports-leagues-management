const { ENDPOINTS } = require("#src/constants/endpoints.js");

const endpointsRouter = require("express").Router();

endpointsRouter.route("/").get((req, res) => {
  res.json({
    message: "Bienvenido a la API de Administración de Ligas Deportivas",
    endpoints: [
      ENDPOINTS.usuarios
    ],
  });
});

module.exports = { endpointsRouter };
