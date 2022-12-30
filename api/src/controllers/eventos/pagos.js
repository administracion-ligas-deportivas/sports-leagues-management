const { FORMA_PAGO } = require("#src/constants/pagos.js");
const { eventoService } = require("#src/services/eventos/index.js");
const { pagosService } = require("#src/services/pagos.js");

const realizarPagoEnEvento = async (req, res, next) => {
  const { eventoId } = req.params;
  const { tipoPago, ...data } = req.body;

  // Convertir en middleware
  if (!eventoId) {
    return res.status(400).json({
      error: "El evento es requerido",
    });
  }

  if (!tipoPago) {
    return res.status(400).json({
      error: "El tipo de pago es requerido",
    });
  }

  if (!pagosService.isTipoPagoValid(tipoPago)) {
    return res.status(400).json({
      error: "El tipo de pago no es válido",
    });
  }

  if (tipoPago === FORMA_PAGO.DIGITAL) {
    return res.status(405).json({
      error: "El pago digital no está disponible",
    });
  }

  try {
    const pago = await realizarPagoEnEvento(eventoId, tipoPago, data);

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
