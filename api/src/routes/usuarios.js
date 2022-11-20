const express = require("express");
const usersRouter = express.Router();

const { userAuthenticator } = require("../middlewares");
const {
  getUsers,
  createUser,
  verifyUser,
  getUserById,
} = require("../controllers/usuarios.js");

usersRouter.get("/", getUsers);
usersRouter.post("/", createUser);
usersRouter.get("/verify", userAuthenticator, verifyUser);
usersRouter.get("/:userId", getUserById);

module.exports = { usersRouter };
