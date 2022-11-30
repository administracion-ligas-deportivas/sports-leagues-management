"use strict";

const { deportes } = require("../../data/deportes.json");
const { getElementsWithTimestamps } = require("../../utils/seeders");

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
