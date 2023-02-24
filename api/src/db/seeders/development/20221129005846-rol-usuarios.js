"use strict";

const { faker } = require("@faker-js/faker");
const { getRolIds } = require("#src/services/rol.js");
const { usuario } = require("../../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      const rolIds = await getRolIds(transaction);
      const usuarios = await usuario.findAll({ transaction });

      await Promise.all(
        await usuarios.map(async (usuario) => {
          const randomRolId = faker.helpers.arrayElement(rolIds);
          return await usuario.setRol(randomRolId, { transaction });
        })
      );
    });
  },

  async down(queryInterface) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      const usuarios = await usuario.findAll({ transaction });

      await Promise.all(
        usuarios.map(async (usuario) => {
          return await usuario.setRol(null, { transaction });
        })
      );
    });
  },
};
