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

const createEquipo = async (req, res) => {
  const { eventoId } = req.params;
  const { nombre, encargadoEmail } = req.body;

  const equipo = await eventosService.createEquipo(
    eventoId,
    nombre,
    encargadoEmail
  );
};

module.exports = {
  getEquiposFromEvento,
  createEquipo
};
