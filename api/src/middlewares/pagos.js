const { FORMA_PAGO } = require("#src/constants/pagos.js");
const { pagosService } = require("#src/services/pagos.js");

const canPay = (req, res, next) => {
  const { tipoPago } = req.body;

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

  next();
};

module.exports = {
  canPay,
};
