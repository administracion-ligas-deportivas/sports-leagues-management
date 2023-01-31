const { eventosService } = require("#src/services/index.js");

const getFormatos = async (req, res) => {
  const { eventoId } = req.params;

  const { evento, formatoEvento } = await eventosService.getFormatos(
    eventoId
  );

  if (!evento) {
    return res.status(404).json({
      error: "No se ha encontrado el evento",
    });
  }

  if (!formatoEvento) {
    return res.status(404).json({
      error:
        "No se ha encontrado un formato para el evento. En este caso, el evento tiene un deporte.",
    });
  }

  return res.json(formatoEvento);
};

module.exports = {
  getFormatos,
};
