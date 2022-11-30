const equiposRouter = require("express").Router();

const { getEquipos, getEquipoById } = require("../controllers/equipos");

equiposRouter.route("/").get(getEquipos);

equiposRouter.route("/:equipoId").get(getEquipoById);

module.exports = { equiposRouter };
