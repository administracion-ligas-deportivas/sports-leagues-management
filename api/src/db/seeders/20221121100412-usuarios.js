"use strict";

const {
  createRandomUsers,
  createRandomAddress,
} = require("../../utils/fakeDataGenerators/usuarios");
const { usuario: usuarioModel, domicilioUsuario } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // https://sequelize.org/api/v6/class/src/dialects/abstract/query-interface.js~queryinterface
    const usuarios = await queryInterface.sequelize.transaction(
      async (transaction) => {
        const randomUsuarios = createRandomUsers(10);
        await queryInterface.bulkInsert("usuario", randomUsuarios, {
          transaction,
          returning: true,
        });

        // https://stackoverflow.com/a/48753999/13562806
        const usuariosDb = await queryInterface.sequelize.query(
          "SELECT id from usuario",
          {
            type: Sequelize.QueryTypes.SELECT,
            transaction,
          }
        );

        const randomAddresses = usuariosDb.map(({ id }) =>
          createRandomAddress(id)
        );

        await queryInterface.bulkInsert("domicilio_usuario", randomAddresses, {
          transaction,
        });
        //         const model = queryInterface.sequelize.model("usuario");
        //
        //         console.log({ model });
        //
        //         // Asignar a cada usuario un domicilio.
        //         const usuariosDb = await usuarioModel.findAll({
        //           include: [{ model: domicilioUsuario }],
        //         });
        //
        //         console.log({ usuariosDb });
        //
        //         const promises = usuariosDb.map(async (usuario) => {
        //           const domicilioUsuario = createRandomAddress();
        //
        //           if (!usuario.getDomicilioUsuario()) return;
        //
        //           return await usuario.createDomicilioUsuario(domicilioUsuario);
        //         });
        //
        //         const usuariosConDomicilio = await Promise.all(promises);
        //
        //         console.log({ usuariosConDomicilio });
        //         return usuariosConDomicilio;
      }
    );

    return usuarios;
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
