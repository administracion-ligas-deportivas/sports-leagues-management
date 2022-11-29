"use strict";
const { tipoEstadisticas } = require("../../data/tipoEstadisticas.json");
const { getTimeStamps } = require("../../utils/fakeDataGenerators/timestamps");

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
      const estadisticas = tipoEstadisticas.map((estadistica) => {
        const { createdAt, updatedAt } = getTimeStamps();
        return {
          ...estadistica,
          created_at: createdAt,
          updated_at: updatedAt,
        };
      });

      console.log({ estadisticas });
      return await queryInterface.bulkInsert("tipo_estadistica", estadisticas, {
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
    await queryInterface.bulkDelete("tipo_estadistica", null, {});
  },
};
