const express = require("express");
const router = express.Router();
const { Comentario } = require("../models");
const { userAuthenticator } = require("../middlewares/userAuthenticator.js");

//Obtener información
router.get("/:AnuncioID", async (req, res) => {
  const anuncioId = req.params.AnuncioID;
  const comentarios = await Comentario.findAll({ where: { AnuncioId: anuncioId } });
  res.json(comentarios);
});

//Insertar información en la base de datos
router.post("/", userAuthenticator, async (req, res) => {
  const comentario = req.body;
  const autor = req.user.nombre;
  comentario.usuario = autor;
  await Comentario.create(comentario);
  res.json(comentario);
});

router.delete("/:commentID", userAuthenticator, async (req, res) => {
  const commentid = req.params.commentID;
  await Comentario.destroy({where: {
    id: commentid,
  }});

  res.json("Correct delete");
});

module.exports = router;
