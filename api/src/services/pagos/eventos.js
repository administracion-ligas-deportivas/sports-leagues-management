const { pagoEventoDeportivo } = require("#src/db/models/index.js");

/* const realizarPagoFisicoEnEvento = async (eventoDeportivoId, pagoInfo) => {

};

// Datos capturados automáticamente en pagos en línea Estos pagos no se
// registran manualmente porque se guardarán una vez que se realice el pago en
// línea. **Estos datos se calculan desde el front antes de mandar la
// petición**.
//
// - Evento deportivo al que pertenece el pago
// - Fecha del pago.
// - Equipo que realizó el pago
const realizarPagoOnlineEnEvento = async (eventoId, pagoInfo) => {
  // https://stackoverflow.com/questions/32889983/is-http-501-appropriate-for-an-unimplemented-api
  // https://stackoverflow.com/a/32890136/13562806
}; */

// const methods = {
//   [FISICO]: realizarPagoFisicoEnEvento,
//   [DIGITAL]: realizarPagoOnlineEnEvento,
// };

const realizarPagoEnEvento = async (eventoDeportivoId, tipoPago, pagoInfo) => {
  // const method = methods[tipoPago];
  // return await method(eventoId, pagoInfo);

  return await pagoEventoDeportivo.create({
    ...pagoInfo,
    eventoDeportivoId,
    formaPago: tipoPago,
  });
};

module.exports = {
  realizarPagoEnEvento,
};
