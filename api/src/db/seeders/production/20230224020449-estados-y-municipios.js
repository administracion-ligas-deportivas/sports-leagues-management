"use strict";

const { estadosService } = require("#src/services/estados.js");
const { estados } = require("#src/data/estados/estados-y-municipios-mx.json");

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
      await estadosService.deleteEstados(transaction);
      await estadosService.registrarEstados(estados, transaction);
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("municipio", null, {});
    await queryInterface.bulkDelete("estado", null, {});
  },
};
