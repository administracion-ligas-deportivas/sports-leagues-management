const { eventoDeportivo } = require("../../db/models");

const getFormatoEvento = async (eventoId) => {
  const evento = await eventoDeportivo.scope("withFormato").findByPk(eventoId);

  return { evento, formatoEvento: evento?.formatoEventoDeportivo };
};

module.exports = {
  getFormatoEvento,
};
