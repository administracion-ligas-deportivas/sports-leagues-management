const express = require('express');
const router = express.Router();
const { Usuario } = require('../models');
const bcrypt = require('bcrypt');

router.post("/", async (req, res) => {
    const {nombre, apellido, correo, contrasenia, telefono} = req.body;
    bcrypt.hash(contrasenia, 10).then((hash) => {
        Usuario.create({nombre:nombre, apellido:apellido, email:correo, contrasenia:hash, telefono:telefono})
    });
    res.json("Usuario registrado exitosamente");

});

router.post('/login', async (req, res) => {
    console.log('a');
    const {correo, contrasenia} = req.body;
    console.log(correo, contrasenia);
    //Crear consulta para verificar si existe el usuario
    const usuarioCheck = await Usuario.findOne({where: {email: correo}});
    
    if(!usuarioCheck) res.json({error: "No existe este usuario"});
    
    bcrypt.compare(contrasenia, usuarioCheck.contrasenia).then((coinciden) => {
        if(!coinciden) res.json("Usuario o contraseña erroneo");

        res.json('Logueado');
    })
});

module.exports = router;