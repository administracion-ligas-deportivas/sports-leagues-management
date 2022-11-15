// https://www.npmjs.com/package/dotenv
require("dotenv").config();
const express = require("express");
//const mariadb = require('mariadb');
const app = express();
const cors = require("cors");
const db = require("./models");

const { errorHandler } = require("./middlewares/errorHandler");
const { unknownEndpoint } = require("./middlewares/unknownEndpoint");
const { tokenExtractor } = require("./middlewares/tokenExtractor");

const postRouter = require("./controllers/posts");
const comentariosRouter = require("./controllers/comentarios");
const usersRouter = require("./controllers/usuarios");
const likesRouter = require("./controllers/likes");
const loginRouter = require("./controllers/login");

app.use(cors());
app.use(express.json());

/*const pool = mariadb.createPool(
{
    host: "localhost",
    user: "root",
    password: "da7a_Bas3",
    port: 3310,
    database: "ligas_deportivas",
});*/

// https://fullstackopen.com/es/part4/autenticacion_de_token#limitacion-de-la-creacion-de-nuevas-notas-a-los-usuarios-registrados
app.use(tokenExtractor);

app.use("/api/posts", postRouter);
app.use("/api/comentarios", comentariosRouter);
app.use("/api/users", usersRouter);
app.use("/api/likes", likesRouter);
app.use("/api/login", loginRouter);

/* 
https://fullstackopen.com/es/part3/node_js_y_express#middleware

Las funciones de middleware deben utilizarse antes de las rutas si queremos que
se ejecuten antes de llamar a los controladores de eventos de ruta. También hay
situaciones en las que queremos definir funciones de middleware después de las
rutas. En la práctica, esto significa que estamos definiendo funciones de
middleware que solo se llaman si ninguna ruta maneja la solicitud HTTP.

Agreguemos el siguiente middleware después de nuestras rutas, que se usa para
capturar solicitudes realizadas a rutas inexistentes. Para estas solicitudes, el
middleware devolverá un mensaje de error en formato JSON.
*/
app.use(unknownEndpoint);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
const server = db.sequelize.sync({ alter: true }).then(() => {
  return app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

module.exports = {
  app,
  server,
};
