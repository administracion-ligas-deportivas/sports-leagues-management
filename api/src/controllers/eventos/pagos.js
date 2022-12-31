const { FORMA_PAGO } = require("#src/constants/pagos.js");
const { eventoService } = require("#src/services/eventos/index.js");
const { pagosService } = require("#src/services/pagos.js");

const realizarPagoEnEvento = async (req, res, next) => {
  const { eventoId } = req.params;
  const { tipoPago, ...data } = req.body;

  try {
    const pago = await eventoService.realizarPagoEnEvento(
      eventoId,
      tipoPago,
      data
    );

    res.json(pago);
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
