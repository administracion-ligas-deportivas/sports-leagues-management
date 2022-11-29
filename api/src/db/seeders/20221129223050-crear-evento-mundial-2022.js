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
const { getRandomOrganizadorId } = require("../../services/usuario");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      const randomOrganizadorId = await getRandomOrganizadorId();
      const timestamps = getTimeStamps();

      const formatoWithTimestamps = {
        organizadorId: randomOrganizadorId,
        ...formatoMundial,
        ...timestamps,
      };

      const formato = await formatoEventoDeportivo.create(
        formatoWithTimestamps,
        {
          transaction,
        }
      );
    });
  },

  async down(queryInterface, Sequelize) {},
};
