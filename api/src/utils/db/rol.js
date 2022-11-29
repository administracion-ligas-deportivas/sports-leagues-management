const { rol } = require("../../db/models");

const getRolIds = async (transaction) => {
  return await rol
    .findAll({ attributes: ["id"], transaction })
    .then((roles) => {
      return roles.map((rol) => rol.id);
    });
};

module.exports = {
  getRolIds,
};
