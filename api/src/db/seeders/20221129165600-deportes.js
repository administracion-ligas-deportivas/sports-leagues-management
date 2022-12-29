"use strict";

import { deportes } from "../../data/deportes.json";
import { getElementsWithTimestamps } from "../../utils/seeders.js";

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      const deportesWithTimestamp = getElementsWithTimestamps(deportes);
      await queryInterface.bulkInsert("deporte", deportesWithTimestamp, {
        transaction,
      });
    });
  },

  async down(queryInterface) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.bulkDelete("deporte", null, { transaction });
    });
  },
};
