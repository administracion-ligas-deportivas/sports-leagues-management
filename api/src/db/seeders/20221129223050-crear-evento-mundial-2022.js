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
const { getRandomOrganizadorId } = require("../../services/rol");
const { getDeporteByNombre } = require("../../services/deporte");
const { getTipoEventoByNombre } = require("../../services/tipoEvento");
const { TIPO_EVENTOS } = require("../../constants/eventos");
const { DEPORTES } = require("../../constants/deportes");

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
