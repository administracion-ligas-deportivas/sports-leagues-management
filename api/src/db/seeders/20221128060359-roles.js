"use strict";
const { roles } = require("../../data/roles.json");

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

    const rolesToInsert = roles.map((rol) => {
      return {
        ...rol,
        created_at: new Date(),
        updated_at: new Date(),
      };
    });

    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.bulkInsert("rol", rolesToInsert, {
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
    await queryInterface.bulkDelete("rol", null, {});
  },
};
