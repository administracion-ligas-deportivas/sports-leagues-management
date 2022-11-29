"use strict";
const { roles } = require("../../data/roles.json");
const { getElementsWithTimestamps } = require("../../utils/seeders");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      const rolesWithTimestamps = getElementsWithTimestamps(roles);

      await queryInterface.bulkInsert("rol", rolesWithTimestamps, {
        transaction,
      });
    });
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("rol", null, {});
  },
};
