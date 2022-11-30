const { partido } = require("../db/models");

const createPartido = async (
  equipos = { local: {}, visitante: {} },
  datosPartido = {},
  eventoDeportivoId,
  transaction
) => {
  // const { local, visitante } = equipos;
  const {
    fecha,
    notas,
    duracionPartido,
    efectuado,
    cancelado,
    canchaId,
    estadisticoId,
  } = datosPartido;

  const partidoData = {
    fecha,
    notas,
    duracionPartido,
    efectuado,
    cancelado,
    canchaId,
    estadisticoId,
    eventoDeportivoId,
  };

  const createdPartido = await partido.create(partidoData, { transaction });
  console.log({ createdPartido });

  const equiposPartido = await Promise.all(
    Object.entries(equipos).map(
      async ([localVisitante, { equipo, puntos }]) => {
        console.log({ localVisitante, puntos, equipo });
        // https://sequelize.org/docs/v6/advanced-association-concepts/advanced-many-to-many/
        return await createdPartido.addEquipo(equipo, {
          through: { puntos, localVisitante },
          transaction,
        });
      }
    )
  );

  console.log({ equiposPartido });
  return createdPartido;
};

module.exports = {
  createPartido,
};
