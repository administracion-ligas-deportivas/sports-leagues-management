const { equiposService } = require("#src/services/index.js");
const { SCOPE_NAMES } = require("#src/db/scopes/equipo.js");

const equipoExists = async (req, res, next) => {
  const equipoId = req.params?.equipoId ?? req.body?.equipoId;

  const equipo = await equiposService.getEquipoById(
    equipoId,
    SCOPE_NAMES.withEncargado
  );

  if (!equipo) {
    return res.status(404).json({
      message: "El equipo no existe.",
    });
  }

  req.equipo = {
    ...equipo,
    instance: equipo,
    encargadoEquipoId: equipo?.encargado?.id,
  };

  next();
};

const equiposExists = async (req, res, next) => {
  const { local, visitante } = req.body ?? {};
};

const isEquipoInEvento = async (req, res, next) => {
  const { equipoId, eventoId } = req.params;

  const isEquipoInEvento = await equiposService.isEquipoInEvento(
    equipoId,
    eventoId
  );

  if (!isEquipoInEvento) {
    return res.status(404).json({
      message: "El equipo no está inscrito en el evento.",
    });
  }

  next();
};

const isUsuarioEncargadoEquipo = async (req, res, next) => {
  const { id } = req.user;
  const { equipo } = req ?? {};

  // console.log({ jugadores: await equipo?.instance.getJugadores() });

  // No hacer petición a la BD si el encargadoEquipoId ya fue establecido por el
  // middleware.
  const isEncargado = equiposService.isUsuarioEncargadoEquipo(id, equipo);

  if (!isEncargado) {
    return res.status(401).json({
      message: "El usuario no es el encargado del equipo.",
    });
  }

  next();
};

const areEquiposInEvento = async (req, res, next) => {
  const { equipos } = req.body;
  const { local, visitante } = equipos;
  const { instance } = req?.evento ?? {};

  console.log({ evento: req?.evento });

  const equiposIds = [local?.id, visitante?.id];

  const { wereFound, notFoundIds } = await equiposService.areEquiposInEvento(
    instance,
    equiposIds
  );

  console.log({ wereFound });

  if (!wereFound) {
    return res.status(404).json({
      message: "Uno o más equipos no están inscritos en el evento.",
      notFoundIds,
    });
  }

  next();
};

module.exports = {
  isUsuarioEncargadoEquipo,
  equipoExists,
  isEquipoInEvento,
  areEquiposInEvento,
};
