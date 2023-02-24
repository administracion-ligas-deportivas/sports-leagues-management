"use strict";

const { tiposDeEvento } = require("#src/data/tiposDeEvento.json");
const { getElementsWithFakeTimestamps } = require("#src/utils/seeders/index.js");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      const tiposDeEventoWithTimestamps =
        getElementsWithFakeTimestamps(tiposDeEvento);

      await queryInterface.bulkInsert(
        "tipo_evento_deportivo",
        tiposDeEventoWithTimestamps,
        {
          transaction,
        }
      );
    });
  },

  async down(queryInterface) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.bulkDelete("tipo_evento_deportivo", null, {
        transaction,
      });
    });
  },
};
