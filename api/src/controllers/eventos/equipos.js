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

const createEquipoFromEvento = async (req, res, next) => {
  const { evento } = req;
  const { nombre, encargadoEmail } = req.body;

  try {
    const equipo = await eventosService.createEquipoFromEvento(
      evento?.instance,
      nombre,
      encargadoEmail
    );

    if (equipo) {
      return res.status(201).json(equipo);
    }

    res.status(404).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getEquiposFromEvento,
  createEquipoFromEvento,
};
