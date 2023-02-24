"use strict";
const { roles } = require("#src/data/roles.json");
const { getElementsWithFakeTimestamps } = require("#src/utils/seeders/index.js");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      const rolesWithTimestamps = getElementsWithFakeTimestamps(roles);

      await queryInterface.bulkInsert("rol", rolesWithTimestamps, {
        transaction,
      });
    });
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("rol", null, {});
  },
};
