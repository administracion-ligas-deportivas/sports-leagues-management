"use strict";

const { usuario: usuarioModel, domicilioUsuario } = require("../models");
const {
  createRandomUsers,
  createRandomAddress,
} = require("../../utils/fakeDataGenerators/usuarios");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // https://sequelize.org/api/v6/class/src/dialects/abstract/query-interface.js~queryinterface
    await queryInterface.sequelize.transaction(async (transaction) => {
      const randomUsuarios = await createRandomUsers(50);
      return await queryInterface.bulkInsert("usuario", randomUsuarios, {
        transaction,
      });
    });
    await queryInterface.sequelize.transaction(async (transaction) => {
      const usuarios = await usuarioModel.findAll(
        {
          include: [{ model: domicilioUsuario }],
        },
        { transaction }
      );

      await Promise.all(
        await usuarios.map(async (usuario) => {
          const { id } = usuario;
          const hasDomicilioUsuario = Boolean(
            await usuario.getDomicilioUsuario({ transaction })
          );

          if (hasDomicilioUsuario) return;

          const domicilioUsuario = await createRandomAddress(id);
          console.log({ domicilioUsuario });
          return await usuario.createDomicilioUsuario(domicilioUsuario, {
            transaction,
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
    await queryInterface.bulkDelete("domicilio_usuario", null, {});
    await queryInterface.bulkDelete("usuario", null, {});
  },
};
