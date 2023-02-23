const { usuario } = require("#src/db/models/index.js");


const userHasRoles = (user, roles) => roles?.includes(user?.rol?.nombre);

const getUserByEmail = async (email) => {
  return await usuario.findOne({
    where: { correo: email },
  });
};

const usuariosService = { userHasRoles, getUserByEmail };

module.exports = { usuariosService };
