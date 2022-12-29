"use strict";

import { __dirname, __filename } from "../../constants/commonjs.js";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import Sequelize from "sequelize";

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
// https://nodejs.org/api/esm.html#esm_differences_between_es_modules_and_commonjs:~:text=module.createRequire().-,No%20__filename%20or%20__dirname,-%23
const config = await import(`${__dirname}/../../config/db.js`).then(
  (config) => {
    return config[env];
  }
);

console.log({ config });

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(async (file) => {
    const model = await import(path.join(__dirname, file)).then(
      (model) => model.default
    )(sequelize, Sequelize.DataTypes);

    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
