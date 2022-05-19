const express = require('express');
const router = express.Router();
const { Comentario } = require('../models');

//Obtener información
router.get('/:AnuncioID', async (req, res) => {
    const anuncioId = req.params.AnuncioID;
    const comentarios = await Comentario.findAll({ where: { AnuncioId: anuncioId } });
    console.log(comentarios);
    res.json(comentarios);
});

//Insertar información en la base de datos
router.post('/', async (req, res) => {
    const comentario = req.body;
    await Comentario.create(comentario);
    res.json(comentario);
});

module.exports = router;