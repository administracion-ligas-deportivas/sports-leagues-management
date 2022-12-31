const estadosRouter = require("express").Router();
const {
  registrarEstados,
  getEstados,
  getMunicipiosDeEstado,
} = require("#src/controllers/estados.js");

estadosRouter.post("/", registrarEstados);
estadosRouter.get("/", getEstados);
estadosRouter.get("/:estadoId/municipios", getMunicipiosDeEstado);
// estadosRouter.delete("/", eliminarEstados);

module.exports = { estadosRouter };
