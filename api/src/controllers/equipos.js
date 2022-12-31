const { equiposService } = require("#src/services/equipos/index.js");

const getEquipos = async (req, res) => {
  const equipos = await equiposService.getAllEquipos();

  return res.json({
    total: equipos.length,
    equipos,
  });
};

const getEquipoById = async (req, res) => {
  const { equipoId } = req.params;

  const foundEquipo = await equiposService.getEquipoById(equipoId);

  return res.json(foundEquipo);
};

module.exports = {
  getEquipos,
  getEquipoById,
};
