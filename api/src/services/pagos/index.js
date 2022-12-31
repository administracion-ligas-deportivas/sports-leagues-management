const eventos = require("./eventos");
const { FORMA_PAGO } = require("#src/constants/pagos.js");
const { isStringInObjectValues } = require("#src/utils/object.js");

const isTipoPagoValid = (tipoPago) => {
  return isStringInObjectValues(FORMA_PAGO, tipoPago);
};

const pagosService = {
  ...eventos,
  isTipoPagoValid,
};

module.exports = { pagosService };
