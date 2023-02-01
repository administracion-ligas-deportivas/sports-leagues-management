const equiposRouter = require("express").Router();

const { getEquipos, getEquipoById } = require("#src/controllers/equipos.js");

equiposRouter.route("/").get(getEquipos);
equiposRouter.route("/:equipoId").get(getEquipoById);

module.exports = { equiposRouter };
