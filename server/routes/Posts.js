const express = require('express');
const router = express.Router();
const { Anuncio } = require('../models');

router.get('/', async (req, res) => {
    const lista_anuncios = await Anuncio.findAll();
    res.json(lista_anuncios);
});

router.post("/", async (req, res) => {
    const insersion = req.body;
    await Anuncio.create(insersion);
    res.json(insersion);
});

module.exports = router;