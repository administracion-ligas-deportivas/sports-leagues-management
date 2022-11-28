"use strict";

const {
  initDbData,
  resetData,
  createRandomElements,
} = require("../../utils/fakeDataGenerators/deportivos");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await initDbData();
      const randomDeportivos = await createRandomElements("deportivos", 50);
      // console.log({ randomDeportivos });
      return await queryInterface.bulkInsert("deportivo", randomDeportivos, {
        transaction,
      });
    });
    await queryInterface.sequelize.transaction(async (transaction) => {
      await resetData();
      const randomCanchas = await createRandomElements("canchas", 50);
      // console.log({ randomCanchas });
      return await queryInterface.bulkInsert("cancha", randomCanchas, {
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
    await queryInterface.bulkDelete("cancha", null, {});
    await queryInterface.bulkDelete("deportivo", null, {});
  },
};
