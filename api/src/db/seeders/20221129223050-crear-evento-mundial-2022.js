"use strict";

const {
  formatoEventoDeportivo,
  eventoDeportivo,
  usuario,
  equipo,
  partido,
} = require("../models");

const {
  formatoMundial,
  eventoMundial,
  equipos,
} = require("../../data/mundial-2022");

const { getTimeStamps } = require("../../utils/fakeDataGenerators/timestamps");
const {
  getRandomOrganizadorId,
  getRolByNombre,
} = require("../../services/rol");
const { getDeporteByNombre } = require("../../services/deporte");
const { getTipoEventoByNombre } = require("../../services/tipoEvento");
const { TIPO_EVENTOS } = require("../../constants/eventos");
const { DEPORTES } = require("../../constants/deportes");
const { createRandomUser } = require("../../utils/fakeDataGenerators/usuarios");
const { ROLES } = require("../../constants/roles");
const { getRandomCancha } = require("../../services/cancha");

const createFormatoMundial = async (organizadorId, transaction) => {
  const { id: deporteId } = await getDeporteByNombre(DEPORTES.FUTBOL);
  const { id: tipoEventoDeportivoId } = await getTipoEventoByNombre(
    TIPO_EVENTOS.LIGA
  );

  const timestamps = getTimeStamps();

  const formatoWithTimestamps = {
    organizadorId,
    deporteId,
    tipoEventoDeportivoId,
    ...formatoMundial,
    ...timestamps,
  };

  const formato = await formatoEventoDeportivo.create(formatoWithTimestamps, {
    transaction,
  });

  console.log({ formato });
  return formato;
};

const getEstadisticosMundial = async (transaction) => {
  const { estadisticos } = eventoMundial;
  const { id: rolId } = await getRolByNombre(ROLES.USUARIO, transaction);

  const estadisticosWithTimestamps = await Promise.all(
    estadisticos.map(async (estadistico) => {
      const estadisticoWithRandomProps = await createRandomUser(
        false,
        estadistico,
        { isCamelCase: true }
      );

      return {
        ...estadisticoWithRandomProps,
        rolId,
      };
    })
  );

  console.log({ estadisticosWithTimestamps });
  return estadisticosWithTimestamps;
};

const addEstadisticosToEvento = async (estadisticos, evento, transaction) => {
  await Promise.all(
    estadisticos.map(async (estadistico) => {
      await evento.createEstadistico(estadistico, { transaction });
    })
  );

  // await evento.reload({ paranoid: false });
  // const estadisticosEvento = await evento.getEstadistico();
  // console.log({ estadisticosEvento });
};

const createEquipo = async (equipoData, deporteId, transaction) => {
  const { nombre, encargadoEquipo, jugadores } = equipoData;
  const { id: rolId } = await getRolByNombre(ROLES.USUARIO, transaction);

  const encargadoWithRandomProps = await createRandomUser(
    false,
    encargadoEquipo,
    { isCamelCase: true }
  );

  const encargado = {
    ...encargadoWithRandomProps,
    rolId,
  };
  const createdEncargado = await usuario.create(encargado, { transaction });

  const equipoWithTimestamps = {
    nombre,
    deporteId,
    encargadoEquipoId: createdEncargado.id,
    ...getTimeStamps(),
  };

  const createdEquipo = await equipo.create(equipoWithTimestamps, {
    transaction,
  });

  const newJugadores = await Promise.all(
    jugadores.map(async (jugador) => {
      const jugadorWithRandomProps = await createRandomUser(false, jugador, {
        isCamelCase: true,
      });

      return {
        ...jugadorWithRandomProps,
        rolId,
      };
    })
  );

  await Promise.all(
    newJugadores.map(async (jugador) => {
      await createdEquipo.createJugador(jugador, { transaction });
    })
  );

  // await createdEquipo.reload({ paranoid: false });
  // console.log({ equipo: createdEquipo.toJSON() });

  return createdEquipo;
};

const createEventoMundial = async (organizadorId, transaction) => {
  const { id: formatoEventoDeportivoId } = await createFormatoMundial(
    organizadorId,
    transaction
  );

  const timestamps = getTimeStamps();
  const mundialWithTimestamps = {
    formatoEventoDeportivoId,
    organizadorId,
    ...eventoMundial,
    ...timestamps,
  };

  const mundial = await eventoDeportivo.create(mundialWithTimestamps, {
    transaction,
  });

  const estadisticos = await getEstadisticosMundial();
  await addEstadisticosToEvento(estadisticos, mundial, transaction);

  console.log({ mundial });
  return mundial;
};

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

const createMexicoVsArgentina = async (eventoDeportivoId, transaction) => {
  const estadistico = await usuario.findOne({
    where: { nombre: "Daniele", apellido: "Orsato" },
    transaction,
  });

  const equipoLocal = await equipo.findOne({
    where: { nombre: "México" },
    transaction,
  });

  const equipoVisitante = await equipo.findOne({
    where: { nombre: "Argentina" },
    transaction,
  });

  const equipos = {
    local: { equipo: equipoLocal, puntos: 0 },
    visitante: { equipo: equipoVisitante, puntos: 3 },
  };

  const randomCancha = await getRandomCancha();

  const datosPartido = {
    fecha: "2022-11-26",
    notas:
      "Con los resultados de este partido, México está en riesgo de eliminación",
    duracionPartido: "01:35:00",
    efectuado: true,
    cancelado: false,
    canchaId: randomCancha.id,
    estadisticoId: estadistico.id,
    eventoDeportivoId,
  };

  return await createPartido(
    equipos,
    datosPartido,
    eventoDeportivoId,
    transaction
  );
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      const randomOrganizadorId = await getRandomOrganizadorId();
      const mundial = await createEventoMundial(
        randomOrganizadorId,
        transaction
      );

      const { id: deporteId } = await getDeporteByNombre(DEPORTES.FUTBOL);

      const createdEquiposMundial = await Promise.all(
        equipos.map(async (equipo) => {
          return await createEquipo(equipo, deporteId, transaction);
        })
      );

      await mundial.addEquipos(createdEquiposMundial, { transaction });

      console.log("Mexico vs Argentina");
      const mexicoVsArgentina = await createMexicoVsArgentina(
        mundial.id,
        transaction
      );

      console.log({ mexicoVsArgentina });
    });
  },

  async down(queryInterface) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await formatoEventoDeportivo.destroy({
        where: {
          nombre: formatoMundial.nombre,
        },
        transaction,
      });
      await eventoDeportivo.destroy({
        where: {
          nombre: eventoMundial.nombre,
        },
        transaction,
      });
    });
  },
};
