const { pagosService } = require("#src/services/index.js");

const realizarPagoEnEvento = async (req, res, next) => {
  const { eventoId } = req.params;
  const { tipoPago, equipoId, ...rest } = req.body;
  const { encargadoEquipoId } = req?.equipo ?? {
    encargadoEquipoId: req.user.id,
  };

  const pagoInfo = {
    ...rest,
    equipoId,
    encargadoEquipoId,
  };

  try {
    const pago = await pagosService.realizarPagoEnEvento(
      eventoId,
      tipoPago,
      pagoInfo
    );

    res.json(pago);
  } catch (error) {
    next(error);
  }
};

const getPagosFromEvento = async (req, res, next) => {
  const { eventoId } = req.params;

  try {
    const pagos = await pagosService.getPagosFromEvento(eventoId);

    res.json({
      total: pagos?.count,
      pagos: pagos?.rows,
    });
  } catch (error) {
    next(error);
  }
};

const getPagosFromEquipoInEvento = async (req, res, next) => {
  const { eventoId, equipoId } = req.params;

  try {
    const pagos = await pagosService.getPagosFromEquipoInEvento(
      equipoId,
      eventoId
    );

    res.json({
      total: pagos?.count,
      pagos: pagos?.rows,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  realizarPagoEnEvento,
  getPagosFromEvento,
  getPagosFromEquipoInEvento,
};
