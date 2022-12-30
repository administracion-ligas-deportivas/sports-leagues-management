const loginRouter = require("express").Router();
const { login } = require("#src/controllers/login.js");

loginRouter.post("/", login);

module.exports = { loginRouter };
