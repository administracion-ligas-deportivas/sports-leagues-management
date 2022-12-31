"use strict";

const {
  createRandomElements,
} = require("#src/utils/fakeDataGenerators/index.js");
const {
  initDbData,
  resetData,
} = require("#src/utils/fakeDataGenerators/deportivos.js");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await initDbData();
      const randomDeportivos = await createRandomElements("deportivos", 50);
      console.log({ randomDeportivos });
      return await queryInterface.bulkInsert("deportivo", randomDeportivos, {
        transaction,
      });
    });
    await queryInterface.sequelize.transaction(async (transaction) => {
      await resetData();
      const randomCanchas = await createRandomElements("canchas", 50);
      console.log({ randomCanchas });
      return await queryInterface.bulkInsert("cancha", randomCanchas, {
        transaction,
      });
    });
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("cancha", null, {});
    await queryInterface.bulkDelete("deportivo", null, {});
  },
};
