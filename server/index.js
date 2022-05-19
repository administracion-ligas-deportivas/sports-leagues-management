const express = require('express');
const mariadb = require('mariadb');
const app = express();

const pool = mariadb.createPool(
    {
        host: "localhost",
        user: "root",
        password: "da7a_Bas3",
        port: 3310,
        database: "ligas_deportivas",
    });

app.listen(3001, () => {
    console.log('Server running on port 3001');
});