const { eventoService } = require("#src/services/eventos/index.js");

const getEstadisticosFromEvento = async (req, res) => {
  const { eventoId } = req.params;
  const estadisticos = await eventoService.getEstadisticosFromEvento(eventoId);

  if (!estadisticos?.length) {
    return res.status(404).end();
  }

  res.json({
    total: estadisticos.length,
    estadisticos,
  });
};

module.exports = {
  getEstadisticosFromEvento,
};
