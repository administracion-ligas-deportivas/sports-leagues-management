const { pagosService } = require("#src/services/index.js");

const realizarPagoEnEvento = async (req, res, next) => {
  const { eventoId } = req.params;
  const { tipoPago, equipoId, ...data } = req.body;
  const { id: encargadoEquipoId } = req.user;

  // Revisar que el ID del encargado (usuario que realizó la petición) sea el
  // mismo que el del encargado del equipo.

  try {
    const pago = await pagosService.realizarPagoEnEvento(
      eventoId,
      tipoPago,
      data
    );

    res.json({
      message: "Aún no implementado, pero se realizaría el pago.",
      pago,
    });
  } catch (error) {
    next(error);
  }

  // pagoService
  //   .realizarPagoEnEvento(eventoId, usuarioId)
  //   .then((pago) => {
  //     res.json(pago);
  //   })
  //   .catch(next);
};

module.exports = {
  realizarPagoEnEvento,
};
