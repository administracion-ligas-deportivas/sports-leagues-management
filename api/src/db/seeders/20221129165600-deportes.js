"use strict";

const { deportes } = require("#src/data/deportes.json");
const { getElementsWithTimestamps } = require("#src/utils/seeders/index.js");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      const deportesWithTimestamp = getElementsWithTimestamps(deportes);
      await queryInterface.bulkInsert("deporte", deportesWithTimestamp, {
        transaction,
      });
    });
  },

  async down(queryInterface) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.bulkDelete("deporte", null, { transaction });
    });
  },
};
