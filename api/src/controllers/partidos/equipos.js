const { equipoPartido } = require("#src/db/models/index.js");
const { LOCAL_VISITANTE } = require("#src/constants/partidos.js");

const getEquiposByPartidoId = async (req, res) => {
  const { partidoId } = req.params;
  console.log(partidoId);
  const equipos = await equipoPartido.findAll({ where: { partidoId } });

  return res.json(equipos);
};

const updateEquiposPartido = async (req, res) => {
  const { partidoId } = req.params;
  const { localId, visitanteId } = req.body;

  try {
    const equiposLocal = await equipoPartido.update(
      { equipoId: localId },
      { where: { partidoId, local_visitante: LOCAL_VISITANTE.LOCAL } }
    );

    const equiposVisitante = await equipoPartido.update(
      { equipoId: visitanteId },
      { where: { partidoId, local_visitante: LOCAL_VISITANTE.VISITANTE } }
    );

    if (equiposLocal && equiposVisitante) {
      return res.json({ message: "Equipos actualizados" });
    }
  } catch (error) {
    return res.status(400).json({ message: "Error al actualizar equipos" });
  }
};

module.exports = {
  getEquiposByPartidoId,
  updateEquiposPartido,
};
