const loginRouter = require("express").Router();
const { login } = require("../controllers/login");

loginRouter.post("/", login);

module.exports = { loginRouter };
