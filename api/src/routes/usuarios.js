const { userAuthenticator } = require("#src/middlewares/userAuthenticator.js");
const express = require("express");
const usersRouter = express.Router();

const {
  getUsers,
  createUser,
  authenticateUser,
  getUserById,
} = require("#src/controllers/usuarios.js");

usersRouter.use(userAuthenticator);
// /api/users/
usersRouter.get("/", getUsers);
usersRouter.post("/", createUser);
// /api/users/verify
usersRouter.get("/verify", authenticateUser);
usersRouter.get("/:usuarioId", getUserById);

module.exports = { usersRouter };
