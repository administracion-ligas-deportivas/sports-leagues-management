const { equipoPartido } = require("#src/db/models/index.js");

const getEquiposByPartidoId = async (req, res) => {
  const { partidoId } = req.params;
  const equipos = await equipoPartido.scope("withFullData").findByPk(partidoId);

  return res.json(equipos);
};

module.exports = {
  getEquiposByPartidoId,
};
