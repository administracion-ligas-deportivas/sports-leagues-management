"use strict";

const {
  createRandomUsers,
} = require("../../utils/fakeDataGenerators/usuarios");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // https://sequelize.org/api/v6/class/src/dialects/abstract/query-interface.js~queryinterface
    const usuarios = await queryInterface.sequelize.transaction(
      async (transaction) => {
        const usuarios = createRandomUsers(10);
        const createdUsuarios = await queryInterface.bulkInsert(
          "usuario",
          usuarios,
          {
            transaction,
            returning: true,
          }
        );

        return createdUsuarios;
      }
    );

    console.log({ usuarios });
    return usuarios;
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
