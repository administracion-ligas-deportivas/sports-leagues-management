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
    encargadoId: equipo?.encargado?.id,
  };

  next();
};

const isUsuarioEncargadoEquipo = async (req, res, next) => {
  const { id } = req.user;
  const { encargadoId } = req?.equipo ?? {};
  let { equipoId } = req?.equipo ?? {};

  if (!equipoId) {
    equipoId = req.params?.equipoId ?? req.body?.equipoId;
  }

  // No hacer petición a la BD si el encargadoId ya fue establecido por el
  // middleware.
  const isEncargado = encargadoId
    ? encargadoId === id
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
};
