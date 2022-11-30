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

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      const randomOrganizadorId = await getRandomOrganizadorId();
      const { id: deporteId } = await getDeporteByNombre(DEPORTES.FUTBOL);
      const { id: tipoEventoDeportivoId } = await getTipoEventoByNombre(
        TIPO_EVENTOS.LIGA
      );

      console.log({ randomOrganizadorId });

      const timestamps = getTimeStamps();

      const formatoWithTimestamps = {
        organizadorId: randomOrganizadorId,
        deporteId,
        tipoEventoDeportivoId,
        ...formatoMundial,
        ...timestamps,
      };

      const formato = await formatoEventoDeportivo.create(
        formatoWithTimestamps,
        {
          transaction,
        }
      );

      console.log({ formato });
    });
  },

  async down(queryInterface, Sequelize) {},
};
