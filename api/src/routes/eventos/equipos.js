const {
  getEquiposFromEvento,
  getPagosFromEquipoInEvento,
  realizarPagoEnEvento,
  createEquipo,
} = require("#src/controllers/eventos/index.js");

const {
  isUsuarioEncargadoEquipo,
  equipoExists,
  isEquipoInEvento,
} = require("#src/middlewares/equipos.js");

const {
  checkParamsId,
  validateRules,
} = require("#src/middlewares/validateRules.js");

const { canPay } = require("#src/middlewares/pagos.js");
const { hasRoles } = require("#src/middlewares/index.js");
const { ROLES } = require("#src/constants/index.js");

module.exports = (eventosRouter) => {
  // Revisar que el usuario sea el organizador del evento.
  eventosRouter
    .route("/:eventoId/equipos")
    .get([hasRoles(ROLES.ADMIN, ROLES.ORGANIZADOR)], getEquiposFromEvento)
    .post([hasRoles(ROLES.ORGANIZADOR)], createEquipo);

  eventosRouter.use("/:eventoId/equipos/:equipoId", [
    checkParamsId("equipoId"),
    validateRules,
    equipoExists,
    isEquipoInEvento,
  ]);

  eventosRouter
    // Obtener pagos si es organizador del evento o encargado del equipo.
    .route("/:eventoId/equipos/:equipoId/pagos")
    // Un organizador no puede realizar los pagos de un equipo.
    .get([], getPagosFromEquipoInEvento)
    .post([isUsuarioEncargadoEquipo, canPay], realizarPagoEnEvento);
};
