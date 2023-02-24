"use strict";

const { permisos } = require("#src/data/permisos.json");
const { getElementsWithFakeTimestamps } = require("#src/utils/seeders/index.js");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      const permisosWithTimestamps = getElementsWithFakeTimestamps(permisos);

      console.log({ permisosWithTimestamps });
      await queryInterface.bulkInsert("permiso", permisosWithTimestamps, {
        transaction,
      });
    });
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("permiso", null, {});
  },
};
