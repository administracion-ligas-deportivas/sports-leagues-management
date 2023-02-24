const equiposRouter = require("express").Router();

const { getEquipos, getEquipoById, inscribirJugadorEnEquipo } = require("#src/controllers/equipos.js");
const { userAuthenticator } = require("#src/middlewares/index.js");

equiposRouter.route("/").get(getEquipos);
equiposRouter.route("/:equipoId").get(getEquipoById);
// /equipos/:equipoUuid/jugadores
// Inscribir al usuario actual como jugador de un equipo.
equiposRouter.route("/:uuid/jugadores").post(userAuthenticator, inscribirJugadorEnEquipo);

module.exports = { equiposRouter };
