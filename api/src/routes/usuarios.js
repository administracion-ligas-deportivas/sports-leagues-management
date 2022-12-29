import express from "express";

import { userAuthenticator } from "../middlewares/index.js";
import {
  createUser,
  getUserById,
  getUsers,
  verifyUser,
} from "../controllers/usuarios.js";
const usersRouter = express.Router();

usersRouter.get("/", getUsers);
usersRouter.post("/", createUser);
usersRouter.get("/verify", userAuthenticator, verifyUser);
usersRouter.get("/:usuarioId", getUserById);

export { usersRouter };
