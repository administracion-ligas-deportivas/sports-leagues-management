"use strict";

const { tipoEstadisticas } = require("#src/data/tipoEstadisticas.json");
const { tipoEstadistica, deporte } = require("../../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      const deportesObjArray = await deporte
        .findAll({ transaction })
        .then((deportes) =>
          deportes.map((deporte) => {
            const nombre = deporte.nombre.toLowerCase();
            return { [nombre]: deporte };
          })
        );

      const deportesObj = Object.assign({}, ...deportesObjArray);
      console.log({ deportesObj });

      await Promise.all(
        tipoEstadisticas.map(async (estadistica) => {
          // https://sequelize.org/docs/v6/core-concepts/model-querying-finders/#findorcreate
          const { deportes: notUsedDeportes, ...tipoEstadisticaData } =
            estadistica;

          const [foundTipoEstadistica] = await tipoEstadistica.findOrCreate({
            where: {
              nombre: estadistica.nombre,
            },
            defaults: {
              ...tipoEstadisticaData,
            },
            transaction,
          });

          console.log({ foundTipoEstadistica });

          const { deportes } = estadistica;
          return await Promise.all(
            deportes.map(async (deporte) => {
              const foundDeporte = deportesObj[deporte.toLowerCase()];
              console.log({ foundDeporte });

              return await foundTipoEstadistica.addDeporte(foundDeporte, {
                transaction,
              });
            })
          );
        })
      );
    });
  },

  async down() {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
