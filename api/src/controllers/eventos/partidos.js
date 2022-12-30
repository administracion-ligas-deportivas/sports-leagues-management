const { eventoService } = require("#src/services/eventos/index.js");

const getPartidosFromEvento = async (req, res) => {
  const { eventoId } = req.params;

  const partidos = await eventoService.getPartidosFromEvento(eventoId);

  if (!partidos?.length) {
    return res.status(404).end();
  }

  res.json({
    total: partidos.length,
    partidos,
  });
};

module.exports = {
  getPartidosFromEvento,
};
