"use strict";

import { permisos } from "../../data/permisos.json";
import { getElementsWithTimestamps } from "../../utils/seeders.js";

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      const permisosWithTimestamps = getElementsWithTimestamps(permisos);

      console.log({ permisosWithTimestamps });
      await queryInterface.bulkInsert("permiso", permisosWithTimestamps, {
        transaction,
      });
    });
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("permiso", null, {});
  },
};
