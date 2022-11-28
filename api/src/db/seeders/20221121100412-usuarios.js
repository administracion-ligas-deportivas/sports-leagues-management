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
    await queryInterface.sequelize.transaction(async (transaction) => {
      const randomUsuarios = await createRandomUsers(100);
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
          console.log({ hasDomicilioUsuario, id });

          if (hasDomicilioUsuario) return;

          const domicilioUsuario = createRandomAddress(id);
          return await usuario.createDomicilioUsuario(domicilioUsuario, {
            transaction,
          });
        })
      );
    });
    // const usuarioModel = usuario(
    //   queryInterface.sequelize,
    //   Sequelize.DataTypes
    // );
    // const domicilioUsuarioModel = domicilioUsuario(
    //   queryInterface.sequelize,
    //   Sequelize.DataTypes
    // );

    //         await Promise.all(
    //           usuarios.forEach(async (usuario) => {
    //             const { id } = usuario;
    //             const hasDomicilioUsuario = Boolean(
    //               await usuario.getDomicilioUsuario()
    //             );
    //             console.log({ hasDomicilioUsuario, id });
    //
    //             //             if (hasDomicilioUsuario) return;
    //             //
    //             //             console.log({ id });
    //             //             const domicilioUsuario = createRandomAddress(id);
    //             //             await usuario.setDomicilioUsuario(domicilioUsuario);
    //           })
    //         );
    // .then((usuarios) =>
    //   usuarios.map((usuario) => {
    //     return usuario.getDomicilioUsuario();
    //   })
    // );

    //         const transformedUsuarios = await Promise.all(
    //           usuarios.map(async (usuario) => {
    //             const hasDomicilioUsuario = Boolean(
    //               await usuario.getDomicilioUsuario()
    //             );
    //
    //             return {
    //               ...usuario.toJSON(),
    //               hasDomicilioUsuario,
    //             };
    //           })
    //         );
    // console.log({ transformedUsuarios });

    // // https://stackoverflow.com/a/48753999/13562806
    // const usuariosDb = await queryInterface.sequelize.query(
    //   "SELECT id from usuario",
    //   {
    //     type: Sequelize.QueryTypes.SELECT,
    //     transaction,
    //   }
    // );

    //         const randomAddresses = usuariosDb.map(({ id }) =>
    //           createRandomAddress(id)
    //         );
    //
    //         await queryInterface.bulkInsert("domicilio_usuario", randomAddresses, {
    //           transaction,
    //         });
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
