const { equipoPartido } = require("#src/db/models/index.js");

const getEquiposByPartidoId = async (req, res) => {
  const { partidoId } = req.params;
  console.log(partidoId);
  const equipos = await equipoPartido.findByPk(partidoId);

  return res.json(equipos);
};

module.exports = {
  getEquiposByPartidoId,
};
