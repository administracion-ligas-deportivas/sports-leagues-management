"use strict";

const { permisos } = require("../../data/permisos.json");
const { getElementsWithTimestamps } = require("../../utils/seeders");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.sequelize.transaction(async (transaction) => {
      const permisosWithTimestamps = getElementsWithTimestamps(permisos);

      await queryInterface.bulkInsert("permiso", permisosWithTimestamps, {
        transaction,
      });
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("permiso", null, {});
  },
};
