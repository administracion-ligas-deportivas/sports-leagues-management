// https://www.npmjs.com/package/dotenv
require("dotenv").config()
const express = require("express")
//const mariadb = require('mariadb');
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())

const db = require("./models")
const PORT = process.env.PORT || 3000

/*const pool = mariadb.createPool(
{
    host: "localhost",
    user: "root",
    password: "da7a_Bas3",
    port: 3310,
    database: "ligas_deportivas",
});*/

//Routers
const postRouter = require("./routes/Posts")
app.use("/posts", postRouter)

const comentariosRouter = require("./routes/Comentarios")
app.use("/comentarios", comentariosRouter)

const usuariosRouter = require("./routes/Usuarios")
app.use("/auth", usuariosRouter)

const likesRouter = require("./routes/Likes")
app.use("/like", likesRouter)

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
})
