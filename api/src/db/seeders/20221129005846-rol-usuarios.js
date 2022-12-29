"use strict";

import { faker } from "@faker-js/faker";
import { getRolIds } from "../../services/rol.js";
import { usuario } from "../models.js";

/** @type {import('sequelize-cli').Migration} */
export default {
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
