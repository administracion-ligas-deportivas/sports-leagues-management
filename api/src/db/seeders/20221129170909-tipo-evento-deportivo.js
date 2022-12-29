"use strict";

import { tiposDeEvento } from "../../data/tiposDeEvento.json";
import { getElementsWithTimestamps } from "../../utils/seeders.js";

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      const tiposDeEventoWithTimestamps =
        getElementsWithTimestamps(tiposDeEvento);

      await queryInterface.bulkInsert(
        "tipo_evento_deportivo",
        tiposDeEventoWithTimestamps,
        {
          transaction,
        }
      );
    });
  },

  async down(queryInterface) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.bulkDelete("tipo_evento_deportivo", null, {
        transaction,
      });
    });
  },
};
