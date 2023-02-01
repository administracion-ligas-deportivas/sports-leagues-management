const sequelizeErrors = require("./sequelize");
const jwtErrors = require("./jwt");

module.exports = {
  ...jwtErrors,
  ...sequelizeErrors,
};
