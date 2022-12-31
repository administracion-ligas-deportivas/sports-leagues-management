const { equiposService } = require("#src/services/index.js");

const isUsuarioEncargadoEquipo = async (req, res, next) => {
  const { id } = req.user;
  const equipoId = req.params?.equipoId ?? req.body?.equipoId;

  const isEncargado = await equiposService.isUsuarioEncargadoEquipo(
    id,
    equipoId
  );

  if (!isEncargado) {
    return res.status(401).json({
      message: "El usuario no es el encargado del equipo.",
    });
  }

  next();
};

module.exports = {
  isUsuarioEncargadoEquipo,
};
