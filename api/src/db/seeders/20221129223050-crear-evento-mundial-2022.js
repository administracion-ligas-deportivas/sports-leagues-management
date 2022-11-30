"use strict";

const {
  formatoEventoDeportivo,
  eventoDeportivo,
  usuario,
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
      const { fecha_nacimiento, rol_id, ...restUsuario } =
        await createRandomUser(false, estadistico);

      return {
        ...restUsuario,
        rolId,
      };
    })
  );

  console.log({ estadisticosWithTimestamps });
  return estadisticosWithTimestamps;
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

      await Promise.all(
        estadisticos.map(async (estadistico) => {
          await mundial.createEstadistico(estadistico, { transaction });
        })
      );

      const estadisticosMundial = await mundial.getEstadistico();
      console.log({ estadisticosMundial });
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
