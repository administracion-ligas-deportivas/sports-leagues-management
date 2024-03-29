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

const equiposExist = async (req, res, next) => {
  const { equipos } = req.body ?? {};
  const { local, visitante } = equipos ?? {};

  const equiposIds = [local?.id, visitante?.id];

  const { foundEquipos, notFoundIds } = await equiposService.getEquiposByIds(
    equiposIds
  );

  // Solo un equipo se encontró y es el mismo que el otro. Por eso no hay ids
  // sin encontrar.
  if (notFoundIds.length === 0 && foundEquipos?.length === 1) {
    return res.status(404).json({
      message: "Los equipos son iguales",
      localId: local?.id,
      visitanteId: visitante?.id,
    });
  }

  if (notFoundIds.length > 0) {
    return res.status(404).json({
      message: "Uno o más equipos no existen.",
      notFoundIds,
    });
  }

  const [foundLocal, foundVisitante] = foundEquipos;

  req.equipos = {
    local: foundLocal,
    visitante: foundVisitante,
    equiposIds,
  };

  next();
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
  const { equiposIds } = req?.equipos ?? {};
  const { instance } = req?.evento ?? {};

  const { wereFound, notFoundIds } = await equiposService.areEquiposInEvento(
    instance,
    equiposIds
  );

  if (!wereFound) {
    return res.status(404).json({
      message: "Uno o más equipos no están inscritos en el evento.",
      notFoundIds,
    });
  }

  next();
};

const areEquiposTheSame = async (req, res, next) => {
  const { local, visitante } = req?.equipos ?? req?.body?.equipos ?? {};

  if (equiposService.areEquiposTheSame(local, visitante)) {
    return res.status(400).json({
      message: "El equipo local y visitante son el mismo.",
      localId: local?.id,
      visitanteId: visitante?.id,
    });
  }

  next();
};

const areEquiposSpecified = async (req, res, next) => {
  const { equipos } = req?.body ?? {};
  const { local, visitante } = equipos ?? {};
  const { id: localId } = local ?? {};
  const { id: visitanteId } = visitante ?? {};

  if (!localId || !visitanteId) {
    return res.status(400).json({
      message: "No se especificaron los equipos.",
      localId,
      visitanteId,
    });
  }

  next();
};

module.exports = {
  isUsuarioEncargadoEquipo,
  equipoExists,
  isEquipoInEvento,
  areEquiposInEvento,
  equiposExist,
  areEquiposTheSame,
  areEquiposSpecified,
};
