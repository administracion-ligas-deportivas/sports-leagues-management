const { userAuthenticator } = require("#src/middlewares/userAuthenticator.js");
const express = require("express");
const usersRouter = express.Router();

const {
  getUsers,
  createUser,
  verifyUser,
  getUserById,
} = require("../controllers/usuarios.js");

usersRouter.use(userAuthenticator);
// /api/users/
usersRouter.get("/", getUsers);
usersRouter.post("/", createUser);
// /api/users/verify
usersRouter.get("/verify", verifyUser);
usersRouter.get("/:usuarioId", getUserById);

module.exports = { usersRouter };
