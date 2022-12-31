const { eventosService } = require("#src/services/index.js");

const getEquiposFromEvento = async (req, res) => {
  const { eventoId } = req.params;
  const equipos = await eventosService.getEquiposFromEvento(eventoId);

  if (!equipos?.length) {
    return res.status(404).end();
  }

  res.json({
    total: equipos.length,
    equipos,
  });
};

module.exports = {
  getEquiposFromEvento,
};
