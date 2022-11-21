const estadosRouter = require("express").Router();
const {
  estado,
  municipio: municipioModel,
  sequelize,
} = require("../db/models");

estadosRouter.post("/", async (req, res) => {
  const { estados } = req.body;

  if (!estados) {
    return res.status(400).json({ error: "No se ha enviado ningún estado" });
  }

  sequelize
    .transaction(async (t) => {
      const promises = Object.entries(estados).map(
        async ([estadoActual, currentMunicipios]) => {
          const municipiosToObj = currentMunicipios.map((municipio) => ({
            nombre: municipio,
          }));

          console.log(
            "🚀 ~ file: estados.js ~ line 22 ~ municipiosToObj ~ municipiosToObj",
            { estadoActual, municipiosToObj }
          );

          return estado.create(
            {
              nombre: estadoActual,
              municipios: municipiosToObj,
            },
            {
              transaction: t,
              include: [{ model: municipioModel }],
            }
          );
        }
      );

      return Promise.all(promises);
    })
    .then((result) => res.status(201).json(result))
    .catch((err) => res.status(400).json({ error: err.message }));
});

estadosRouter.get("/", async (req, res) => {
  const estados = await estado.findAll({
    include: estado.municipio,
  });

  res.json(estados);
});

estadosRouter.delete("/", async (req, res) => {
  sequelize
    .transaction(async (t) => {
      await estado.destroy({ where: {}, transaction: t });
      await municipioModel.destroy({ where: {}, transaction: t });
    })
    .then(() => res.status(204).end())
    .catch((err) => res.status(400).json({ error: err.message }));
});

module.exports = { estadosRouter };
