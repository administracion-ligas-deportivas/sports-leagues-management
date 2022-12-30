const { partido, cancha, usuario } = require("#src/db/models/index.js");

const getPartidosFromEvento = async (eventoId) => {
  return await partido.scope("withFullData").findAll({
    where: {
      eventoDeportivoId: eventoId,
    },
    include: [
      {
        model: usuario,
        as: "estadistico",
      },
      cancha,
    ],
    attributes: {
      exclude: ["eventoDeportivoId", "estadisticoId", "canchaId"],
    },
  });
};

module.exports = {
  getPartidosFromEvento,
};
