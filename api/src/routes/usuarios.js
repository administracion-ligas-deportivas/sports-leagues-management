const express = require("express");
const usersRouter = express.Router();

const { userAuthenticator } = require("#src/middlewares/index.js");
const {
  getUsers,
  createUser,
  verifyUser,
  getUserById,
} = require("../controllers/usuarios.js");

usersRouter.get("/", getUsers);
usersRouter.post("/", createUser);
usersRouter.get("/verify", userAuthenticator, verifyUser);
usersRouter.get("/:usuarioId", getUserById);

module.exports = { usersRouter };
