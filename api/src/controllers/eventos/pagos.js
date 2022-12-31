const { pagosService } = require("#src/services/index.js");

const realizarPagoEnEvento = async (req, res, next) => {
  const { eventoId } = req.params;
  const { tipoPago, equipoId, ...rest } = req.body;
  const { encargadoEquipoId } = req?.equipo ?? {
    encargadoEquipoId: req.user.id,
  };

  console.log({ encargadoEquipoId });

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

    res.json({
      message:
        "Aún no implementado, pero se realizaría el pago. El usuario es el encargado del equipo.",
      pago,
    });
  } catch (error) {
    console.log({ error });
    next(error);
  }
};

module.exports = {
  realizarPagoEnEvento,
};
