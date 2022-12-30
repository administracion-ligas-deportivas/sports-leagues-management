const { eventoService } = require("#src/services/eventos/index.js");

const getEquiposFromEvento = async (req, res) => {
  const { eventoId } = req.params;
  const equipos = await eventoService.getEquiposFromEvento(eventoId);

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
