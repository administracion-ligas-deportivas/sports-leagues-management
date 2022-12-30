"use strict";

const { usuario: usuarioModel, domicilioUsuario } = require("../models");
const {
  createRandomDomicilioUsuario,
  initDbData,
} = require("#src/utils/fakeDataGenerators/usuarios.js");
const { createRandomElements } = require("#src/utils/fakeDataGenerators/index.js");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    // https://sequelize.org/api/v6/class/src/dialects/abstract/query-interface.js~queryinterface
    await queryInterface.sequelize.transaction(async (transaction) => {
      await initDbData();
      const randomUsuarios = await createRandomElements("usuarios", 50).then(
        (usuarios) => {
          return usuarios.map((usuario) => {
            const { rol_id, ...restUsuario } = usuario;
            return restUsuario;
          });
        }
      );

      // console.log({ randomUsuarios });
      return await queryInterface.bulkInsert("usuario", randomUsuarios, {
        transaction,
      });
    });
    await queryInterface.sequelize.transaction(async (transaction) => {
      await initDbData();
      const usuarios = await usuarioModel.findAll({
        include: [{ model: domicilioUsuario }],
        transaction,
      });

      await Promise.all(
        await usuarios.map(async (usuario) => {
          const { id } = usuario;
          const hasDomicilioUsuario = Boolean(
            await usuario.getDomicilioUsuario({ transaction })
          );

          if (hasDomicilioUsuario) return;

          const domicilioUsuario = await createRandomDomicilioUsuario(id);

          // console.log({ domicilioUsuario });
          return await usuario.createDomicilioUsuario(domicilioUsuario, {
            transaction,
          });
        })
      );
    });
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("domicilio_usuario", null, {});
    await queryInterface.bulkDelete("usuario", null, {});
  },
};
