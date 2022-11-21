// https://www.npmjs.com/package/dotenv
require("dotenv").config();
const express = require("express");
// const mariadb = require('mariadb');
const app = express();
const cors = require("cors");
const db = require("./db/models");
const { faker } = require("@faker-js/faker");
const { PORT } = require("./config");

const {
  errorHandler,
  unknownEndpoint,
  tokenExtractor,
} = require("./middlewares");

const {
  postsRouter,
  comentariosRouter,
  usersRouter,
  likesRouter,
  loginRouter,
  estadosRouter,
  deportesRouter,
  deportivosRouter,
  eventosRouter,
} = require("./routes");

faker.setLocale("es_MX");

app.use(cors());
app.use(express.json());

// https://fullstackopen.com/es/part4/autenticacion_de_token#limitacion-de-la-creacion-de-nuevas-notas-a-los-usuarios-registrados
app.use(tokenExtractor);

app.use("/api/posts", postsRouter);
app.use("/api/comentarios", comentariosRouter);
app.use("/api/usuarios", usersRouter);
app.use("/api/likes", likesRouter);
app.use("/api/login", loginRouter);
app.use("/api/estados", estadosRouter);
app.use("/api/deportes", deportesRouter);
app.use("/api/deportivos", deportivosRouter);
app.use("/api/eventos", eventosRouter);

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

const server = db.sequelize.sync().then(() => {
  return app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

module.exports = {
  app,
  server,
};
