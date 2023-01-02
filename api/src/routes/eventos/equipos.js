const {
  getEquiposFromEvento,
  getPagosFromEquipoInEvento,
  realizarPagoEnEvento,
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

module.exports = (eventosRouter) => {
  eventosRouter.route("/:eventoId/equipos").get(getEquiposFromEvento);

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
