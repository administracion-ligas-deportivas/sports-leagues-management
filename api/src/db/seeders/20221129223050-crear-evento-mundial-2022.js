"use strict";

const {
  formatoEventoDeportivo,
  eventoDeportivo,
  usuario,
  equipo,
} = require("../models");

const {
  formatoMundial,
  eventoMundial,
  argentina,
  mexico,
} = require("../../data/mundial-2022");

const { getTimeStamps } = require("../../utils/fakeDataGenerators/timestamps");
const { getElementsWithTimestamps } = require("../../utils/seeders");
const {
  getRandomOrganizadorId,
  getRolByNombre,
} = require("../../services/rol");
const { getDeporteByNombre } = require("../../services/deporte");
const { getTipoEventoByNombre } = require("../../services/tipoEvento");
const { TIPO_EVENTOS } = require("../../constants/eventos");
const { DEPORTES } = require("../../constants/deportes");
const {
  createRandomUser,
  initDbData,
} = require("../../utils/fakeDataGenerators/usuarios");
const { ROLES } = require("../../constants/roles");

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

  console.log({ mundial });
  return mundial;
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      const randomOrganizadorId = await getRandomOrganizadorId();
      const mundial = await createEventoMundial(
        randomOrganizadorId,
        transaction
      );

      const estadisticos = await getEstadisticosMundial();

      await addEstadisticosToEvento(estadisticos, mundial, transaction);

      const { id: deporteId } = await getDeporteByNombre(DEPORTES.FUTBOL);

      const createdArgentina = await createEquipo(
        argentina,
        deporteId,
        transaction
      );

      const createdMexico = await createEquipo(mexico, deporteId, transaction);

      console.log({
        createdArgentina: createdArgentina.toJSON(),
        createdMexico: createdMexico.toJSON(),
      });

      await mundial.addEquipos([createdArgentina, createdMexico], {
        transaction,
      });

      const equipos = await mundial.getEquipos();
      console.log({ equipos: equipos.map((equipo) => equipo.toJSON()) });
    });
  },

  async down(queryInterface, Sequelize) {
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
