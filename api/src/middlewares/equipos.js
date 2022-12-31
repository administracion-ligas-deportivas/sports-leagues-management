const { equiposService } = require("#src/services/index.js");

const equipoExists = async (req, res, next) => {
  const equipoId = req.params?.equipoId ?? req.body?.equipoId;

  const equipo = await equiposService.getEquipoById(equipoId);

  if (!equipo) {
    return res.status(404).json({
      message: "El equipo no existe.",
    });
  }

  req.equipo = {
    ...equipo,
    encargadoEquipoId: equipo?.encargado?.id,
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
  const { encargadoEquipoId } = req?.equipo ?? {};
  let { equipoId } = req?.equipo ?? {};

  if (!equipoId) {
    equipoId = req.params?.equipoId ?? req.body?.equipoId;
  }

  // No hacer petición a la BD si el encargadoEquipoId ya fue establecido por el
  // middleware.
  const isEncargado = encargadoEquipoId
    ? encargadoEquipoId === id
    : await equiposService.isUsuarioEncargadoEquipo(id, equipoId);

  if (!isEncargado) {
    return res.status(401).json({
      message: "El usuario no es el encargado del equipo.",
    });
  }

  next();
};

module.exports = {
  isUsuarioEncargadoEquipo,
  equipoExists,
  isEquipoInEvento,
};
