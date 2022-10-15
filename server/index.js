// https://www.npmjs.com/package/dotenv
require("dotenv").config();
const express = require("express");
//const mariadb = require('mariadb');
const app = express();
const cors = require("cors");
const db = require("./models");

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

app.use("/api/posts", postRouter);
app.use("/api/comentarios", comentariosRouter);
app.use("/api/users", usersRouter);
app.use("/api/like", likesRouter);
app.use("/api/login", loginRouter);

const PORT = process.env.PORT || 3001;
const server = db.sequelize.sync().then(() => {
  return app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

module.exports = {
  app,
  server,
};
