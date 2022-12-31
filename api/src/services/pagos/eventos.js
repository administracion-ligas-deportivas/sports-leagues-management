const { pagoEventoDeportivo } = require("#src/db/models/index.js");

const realizarPagoEnEvento = async (eventoDeportivoId, tipoPago, pagoInfo) => {
  return await pagoEventoDeportivo.create({
    ...pagoInfo,
    eventoDeportivoId,
    formaPago: tipoPago,
  });
};

const getPagosFromEvento = async (eventoDeportivoId) => {
  return await pagoEventoDeportivo.findAndCountAll({
    where: {
      eventoDeportivoId,
    },
  });
};

const getPagosFromEquipoInEvento = async (equipoId, eventoDeportivoId) => {
  return await pagoEventoDeportivo.findAndCountAll({
    where: {
      eventoDeportivoId,
      equipoId,
    },
  });
};

module.exports = {
  realizarPagoEnEvento,
  getPagosFromEvento,
  getPagosFromEquipoInEvento,
};
