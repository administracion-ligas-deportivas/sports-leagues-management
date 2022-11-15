const express = require("express");
const comentariosRouter = express.Router();

const { userAuthenticator } = require("../middlewares/userAuthenticator.js");
const {
  getCommentsByPostId,
  addPostComment,
  deleteCommentById,
} = require("../controllers/comentarios.js");

//Obtener información
comentariosRouter.get("/:postId", getCommentsByPostId);
comentariosRouter.post("/", userAuthenticator, addPostComment);
comentariosRouter.delete("/:commentId", userAuthenticator, deleteCommentById);

module.exports = { comentariosRouter };
