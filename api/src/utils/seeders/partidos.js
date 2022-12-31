const { getRandomCancha } = require("#src/services/cancha.js");
const { partidosService } = require("#src/services/index.js");
const {
  usuario,
  equipo,
  tipoEstadistica,
  estadisticaJugadorPartido,
} = require("#src/db/models/index.js");
const {
  estadisticasMexicoVsArgentina,
} = require("#src/data/mundial-2022/index.js");
const {
  createEstadisticaJugadorPartido,
} = require("#src/services/estadisticaJugadorPartido.js");

const createEstadisticasJugadores = async (
  jugadores,
  partidoId,
  transaction
) => {
  return jugadores.map(async (currentJugador) => {
    const { estadisticas } = currentJugador;

    const foundJugador = await usuario.findOne({
      where: {
        nombre: currentJugador.nombre,
        apellido: currentJugador.apellido,
      },
      transaction,
    });

    console.log({ foundJugador });

    return await Promise.all(
      estadisticas.map(async (currentEstadistica) => {
        const { nombre, tiempoTranscurrido, cantidad } = currentEstadistica;

        const foundTipoEstadistica = await tipoEstadistica.findOne({
          where: { nombre },
          transaction,
        });

        console.log({ foundTipoEstadistica });

        return await createEstadisticaJugadorPartido(
          partidoId,
          foundTipoEstadistica.id,
          foundJugador.id,
          tiempoTranscurrido,
          cantidad,
          transaction
        );
      })
    );
  });
};

const createMexicoVsArgentina = async (eventoDeportivoId, transaction) => {
  const { equipos: equiposEstadisticas } = estadisticasMexicoVsArgentina;
  const estadistico = await usuario.findOne({
    where: { nombre: "Daniele", apellido: "Orsato" },
    transaction,
  });

  const mexico = await equipo.findOne({
    where: { nombre: "México" },
    transaction,
  });

  const argentina = await equipo.findOne({
    where: { nombre: "Argentina" },
    transaction,
  });

  const randomCancha = await getRandomCancha();

  const datosPartido = {
    fecha: "2022-11-26",
    notas:
      "Con los resultados de este partido, México está en riesgo de eliminación",
    duracionPartido: "01:36:00",
    efectuado: true,
    cancelado: false,
    canchaId: randomCancha.id,
    estadisticoId: estadistico.id,
    eventoDeportivoId,
  };

  const equipos = {
    local: { equipo: mexico, puntos: 0 },
    visitante: { equipo: argentina, puntos: 3 },
  };

  const createdPartido = await partidosService.createPartidoAndAddEquipos(
    equipos,
    datosPartido,
    eventoDeportivoId,
    transaction
  );

  //   const [argentinaStats, mexicoStats] = equiposEstadisticas;
  //
  //   await Promise.all(
  //     argentinaStats.jugadores.map(async (currentJugador) => {
  //       const { estadisticas } = currentJugador;
  //       const foundJugador = await usuario.findOne({
  //         where: {
  //           nombre: currentJugador.nombre,
  //           apellido: currentJugador.apellido,
  //         },
  //         transaction,
  //       });
  //
  //       console.log({ foundJugador });
  //
  //       return await Promise.all(
  //         estadisticas.map(async (currentEstadistica) => {
  //           const { nombre, tiempoTranscurrido, cantidad } = currentEstadistica;
  //
  //           const foundTipoEstadistica = await tipoEstadistica.findOne({
  //             where: { nombre },
  //             transaction,
  //           });
  //
  //           console.log({ foundTipoEstadistica });
  //
  //           return await estadisticaJugadorPartido.create({
  //             tiempoTranscurrido,
  //             cantidad,
  //             partidoId: createdPartido.id,
  //             tipoEstadisticaId: foundTipoEstadistica.id,
  //             jugadorId: foundJugador.id,
  //           });
  //         })
  //       );
  //     })
  //   );

  return createdPartido;
};

module.exports = {
  createMexicoVsArgentina,
};
