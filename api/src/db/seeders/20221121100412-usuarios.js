"use strict";

const {
  createRandomUsers,
} = require("../../utils/fakeDataGenerators/usuarios");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (transaction) => {
      const usuarios = createRandomUsers(10);
      await queryInterface.bulkInsert("usuarios", usuarios, \{
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
  },
};
