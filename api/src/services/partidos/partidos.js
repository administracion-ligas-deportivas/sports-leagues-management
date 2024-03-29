const { LOCAL_VISITANTE } = require("#src/constants/partidos.js");
const { partido, equipo } = require("#src/db/models/index.js");

/**
 * Crear un partido y añadir los equipos local y visitante.
 *
 * Revisar que los equipos estén inscritos en el evento deportivo. Podríamos
 * utilizar el `rest` operator para iterar por cada equipo. También verificar
 * que el estadístico seleccionado estén inscrito en el evento deportivo.
 */
const createPartido = async (eventoDeportivoId, partidoInfo) => {
  const { equipos, estadisticoId, canchaId, ...restInfo } = partidoInfo;
  const { local, visitante } = equipos;

  const createdPartido = await partido.create({
    ...restInfo,
    eventoDeportivoId,
    estadisticoId,
    canchaId,
  });

  const addedEquipos = await Promise.all(
    Object.entries(equipos).map(async ([localVisitanteKey, { id }]) => {
      const foundEquipo = await equipo.findByPk(id);

      const isLocal = localVisitanteKey === LOCAL_VISITANTE.LOCAL;
      const puntos = isLocal ? local.puntos : visitante.puntos;
      const key = localVisitanteKey.toUpperCase();

      return await createdPartido.addEquipo(foundEquipo, {
        through: {
          puntos: puntos ?? 0,
          // local: equipo's instance
          // visitante: equipo's instance
          localVisitante: LOCAL_VISITANTE[key],
        },
      });
    })
  );

  // https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays
  return {
    partido: createdPartido,
    equipos: addedEquipos.flat(),
  };
};

/**
 * Crear un partido y añadir los equipos, que son instancias del modelo
 * `equipo`. No se añaden mediante su ID.
 *
 * **Esta función la utilicé más que nada para generar los `seeders`.**
 *
 * @param {Object} equipos Objeto con las propiedades `local` y `visitante`.
 * Cada propiedad tiene `equipo` y `puntos` como propiedades. El equipo es una
 * instancia del modelo `equipo` y los puntos son un número. Por esta razón, se
 * utiliza el método `addEquipo` de la instancia de `partido` para agregar los
 * equipos.
 * @param {Object} datosPartido Objeto con las propiedades del partido.
 * @param {*} eventoDeportivoId
 * @param {*} transaction
 * @returns Partido creado.
 */
const createPartidoAndAddEquipos = async (
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
      async ([localVisitanteKey, { equipo, puntos }]) => {
        console.log({ localVisitanteKey, puntos, equipo });
        // https://sequelize.org/docs/v6/advanced-association-concepts/advanced-many-to-many/
        return await createdPartido.addEquipo(equipo, {
          through: { puntos, localVisitante: localVisitanteKey },
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
  createPartidoAndAddEquipos,
};
