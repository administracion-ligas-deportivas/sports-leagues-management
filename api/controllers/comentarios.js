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
  console.log(
    "🚀 ~ file: comentarios.js ~ line 13 ~ router.get ~ comentarios",
    { comentarios }
  );
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
  const { params } = req;
  const { commentId } = req.params;
  console.log("🚀 ~ file: comentarios.js ~ line 30 ~ router.delete ~ req", {
    params,
  });

  await Comentario.destroy({
    where: {
      id: commentId,
    },
  });

  res.json({ message: "Correct delete" });
});

module.exports = router;
