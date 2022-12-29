"use strict";
import { tipoEstadisticas } from "../../data/tipoEstadisticas.json";
import { getElementsWithTimestamps } from "../../utils/seeders.js";

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      // Return without property 'deportes'
      const estadisticas = getElementsWithTimestamps(tipoEstadisticas).map(
        (estadistica) => {
          const { deportes, ...estadisticaWithoutDeportes } = estadistica;
          return estadisticaWithoutDeportes;
        }
      );

      return await queryInterface.bulkInsert("tipo_estadistica", estadisticas, {
        transaction,
      });
    });
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("tipo_estadistica", null, {});
  },
};
