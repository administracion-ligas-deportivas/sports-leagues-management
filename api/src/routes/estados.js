const estadosRouter = require("express").Router();
const {
  registrarEstados,
  getEstados,
  eliminarEstados,
  getMunicipiosDeEstado,
} = require("../controllers/estados");

estadosRouter.post("/", registrarEstados);
estadosRouter.get("/", getEstados);
estadosRouter.get("/:estadoId/municipios", getMunicipiosDeEstado);
estadosRouter.delete("/", eliminarEstados);

module.exports = { estadosRouter };
