const { FORMA_PAGO } = require("#src/constants/pagos.js");

const { FISICO, DIGITAL } = FORMA_PAGO;

const realizarPagoFisicoEnEvento = (eventoId, data) => {};

const realizarPagoOnlineEnEvento = (eventoId, data) => {
  // https://stackoverflow.com/questions/32889983/is-http-501-appropriate-for-an-unimplemented-api
  // https://stackoverflow.com/a/32890136/13562806
};

const methods = {
  [FISICO]: realizarPagoFisicoEnEvento,
  [DIGITAL]: realizarPagoOnlineEnEvento,
};

const realizarPagoEnEvento = (eventoId, tipoPago, data) => {
  const method = methods[tipoPago];
  return method(eventoId, data);
};

module.exports = {
  realizarPagoEnEvento,
};
