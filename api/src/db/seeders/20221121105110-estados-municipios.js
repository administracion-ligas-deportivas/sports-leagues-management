"use strict";

const { estado, municipio } = require("../models");
const estados = require("../../data/estados-municipios-mx.json");

const soloEstados = Object.keys(estados).map((nombre) => {
  return {
    nombre,
  };
});
const estadosMunicipios = Object.entries(estados).map(
  ([estado, municipiosArray]) => {
    const municipios = municipiosArray.map((municipio) => {
      return {
        nombre: municipio,
      };
    });

    return {
      nombre: estado,
      municipios,
    };
  }
);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.bulkInsert("estado", soloEstados, {
        // include: [queryInterface.sequelize.models.municipio],
        transaction,
      });

      Promise.allSettled(
        estadosMunicipios.map(({ nombre, municipios }) => {
          return estado
            .findOne(
              {
                where: {
                  nombre,
                },
              },
              { transaction }
            )
            .then((foundEstado) => {
              console.log({ foundEstado });
              return municipios.map((municipio) => ({
                ...municipio,
                estadoId: foundEstado.id,
              }));
            });
        })
      );
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("estado", null, {});
  },
};
