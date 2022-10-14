const express = require("express");
const { validateToken } = require("../middlewares/AuthMiddleware");
const router = express.Router();
const { Anuncio, Likes } = require("../models");

router.get("/", validateToken, async (req, res) => {
  const lista_anuncios = await Anuncio.findAll({include: [Likes]});

  const anuncios_liked = await Likes.findAll({where:
    {
      UsuarioId: req.user.id,
    }});

  res.json({lista_anuncios: lista_anuncios, liked:anuncios_liked});
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const advise = await Anuncio.findByPk(id);
  res.json(advise);
});

router.post("/", validateToken, async (req, res) => {
  const insersion = req.body;
  insersion.autor = req.user.userEmail;
  console.log("A", insersion);
  await Anuncio.create(insersion);
  res.json(insersion);
});

router.delete("/:AvisoID", validateToken, async (req, res) => {
  const avisoid = req.params.AvisoID;
  await Anuncio.destroy({where: {
    id: avisoid,
  }});

  res.json("Correct delete");
});

module.exports = router;