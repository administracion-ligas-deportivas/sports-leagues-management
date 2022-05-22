const express = require('express');
const { validateToken } = require('../middlewares/AuthMiddleware');
const router = express.Router();
const { Likes } = require('../models');

router.post('/', validateToken, async (req, res) => {
    const {PostID} = req.body;
    const userID = req.user.id;

    const found = await Likes.findOne({
        //Verifica si el usuario actual ya le dio like al post actual
        where: {AnuncioId: PostID, UsuarioId: userID}
    });


    if(!found) 
    {
        await Likes.create({AnuncioId:PostID, UsuarioId: userID});
        res.json({liked: true});
    }
    else
    {
        await Likes.destroy({
        where: {
            AnuncioId: PostID,
            UsuarioId: userID
        }});
        res.json({liked: false});
    }
});

module.exports = router;