"use strict";

const { faker } = require("@faker-js/faker");
const { rol, usuario } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      const rolIds = await rol
        .findAll({ attributes: ["id"], transaction })
        .then((roles) => {
          return roles.map((rol) => rol.id);
        });

      const usuarios = await usuario.findAll({ transaction });

      console.log({ rolIds });
      await Promise.all(
        await usuarios.map(async (usuario) => {
          const randomRolId = faker.helpers.arrayElement(rolIds);
          return await usuario.setRol(randomRolId, { transaction });
        })
      );
    });
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    // await queryInterface.bulkDelete("People", {}, {});
  },
};
