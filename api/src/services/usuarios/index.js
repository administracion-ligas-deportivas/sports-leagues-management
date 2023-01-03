const userHasRoles = (user, roles) => roles?.includes(user?.rol?.nombre);

const usuariosService = { userHasRoles };

module.exports = { usuariosService };
