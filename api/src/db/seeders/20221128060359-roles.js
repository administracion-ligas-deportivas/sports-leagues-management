"use strict";
import { roles } from "../../data/roles.json";
import { getElementsWithTimestamps } from "../../utils/seeders.js";

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      const rolesWithTimestamps = getElementsWithTimestamps(roles);

      await queryInterface.bulkInsert("rol", rolesWithTimestamps, {
        transaction,
      });
    });
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("rol", null, {});
  },
};
