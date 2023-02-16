const { userAuthenticator } = require("#src/middlewares/userAuthenticator.js");
const express = require("express");
const usersRouter = express.Router();

const {
  getUsers,
  createUser,
  authenticateUser,
  getUserById,
} = require("#src/controllers/usuarios.js");

// /api/users/
usersRouter.route("/").get(userAuthenticator, getUsers).post(createUser);
// /api/users/verify
usersRouter.get("/verify", userAuthenticator, authenticateUser);
usersRouter.route("/:usuarioId").get(userAuthenticator, getUserById);

module.exports = { usersRouter };
