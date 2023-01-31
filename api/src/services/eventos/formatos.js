const { eventoDeportivo } = require("#src/db/models/index.js");
const { SCOPE_NAMES } = require("#src/db/scopes/eventoDeportivo.js");

const getFormatos = async (eventoId) => {
  const evento = await eventoDeportivo
    .scope(SCOPE_NAMES.withFormato)
    .findByPk(eventoId);

  return { evento, formatoEvento: evento?.formatoEventoDeportivo };
};

module.exports = {
  getFormatos,
};
