const express = require("express");
const router = express.Router();
const { Comentario } = require("../models");
const { userAuthenticator } = require("../middlewares/userAuthenticator.js");

//Obtener información
router.get("/:anuncioId", async (req, res) => {
  const { anuncioId } = req.params;

  const comentarios = await Comentario.findAll({
    where: { AnuncioId: anuncioId },
  });
  res.json(comentarios);
});

//Insertar información en la base de datos
// POST /api/comentarios/
router.post("/", userAuthenticator, async (req, res) => {
  const { body, user } = req;
  const { nombre } = user;

  const comentario = { ...body, usuario: nombre };
  const newComment = await Comentario.create(comentario);

  res.json(newComment);
});

router.delete("/:commentId", userAuthenticator, async (req, res) => {
  const { commentId } = req.params;
  await Comentario.destroy({
    where: {
      id: commentId,
    },
  });

  res.json("Correct delete");
});

module.exports = router;
