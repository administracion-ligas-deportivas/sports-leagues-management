"use strict";

const {
  formatoEventoDeportivo,
  eventoDeportivo,
  usuario,
  equipo,
} = require("../../models");

const {
  formatoMundial,
  eventoMundial,
  equipos,
} = require("#src/data/mundial-2022/index.js");

const {
  getFakeTimeStamps,
} = require("#src/utils/fakeDataGenerators/timestamps.js");
const {
  getRandomOrganizadorId,
  getRolByNombre,
} = require("#src/services/rol.js");
const { getDeporteByNombre } = require("#src/services/deporte.js");
const { getTipoEventoByNombre } = require("#src/services/tipoEvento.js");
const { TIPO_EVENTOS } = require("#src/constants/eventos.js");
const { DEPORTES } = require("#src/constants/deportes.js");
const {
  createRandomUser,
} = require("#src/utils/fakeDataGenerators/usuarios.js");
const { ROLES } = require("#src/constants/roles.js");
const { createMexicoVsArgentina } = require("#src/utils/seeders/partidos.js");

const createFormatoMundial = async (organizadorId, transaction) => {
  const { id: deporteId } = await getDeporteByNombre(DEPORTES.FUTBOL);
  const { id: tipoEventoDeportivoId } = await getTipoEventoByNombre(
    TIPO_EVENTOS.LIGA
  );

  const timestamps = getFakeTimeStamps();

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

const createEquipoFromEvento = async (equipoData, deporteId, transaction) => {
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
    ...getFakeTimeStamps(),
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

  const timestamps = getFakeTimeStamps();
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
          return await createEquipoFromEvento(equipo, deporteId, transaction);
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
