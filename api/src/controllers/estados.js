const {
  estado,
  municipio: municipioModel,
  sequelize,
} = require("#src/db/models/index.js");

const getEstados = async (req, res) => {
  const estados = await estado.findAll({
    include: estado.municipio,
    order: [["nombre", "ASC"]],
  });

  res.json(estados);
};

const getMunicipiosDeEstado = async (req, res) => {
  const { estadoId } = req.params;

  sequelize
    .transaction(async (t) => {
      const municipios = await municipioModel.findAll({
        where: {
          estadoId,
        },
        order: [["nombre", "ASC"]],
        attributes: { exclude: ["estadoId"] },
        transaction: t,
      });

      return res.json(municipios);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

const registrarEstados = async (req, res) => {
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
};

const eliminarEstados = async (req, res) => {
  sequelize
    .transaction(async (t) => {
      await estado.destroy({ where: {}, transaction: t });
      await municipioModel.destroy({ where: {}, transaction: t });
    })
    .then(() => res.status(204).end())
    .catch((err) => res.status(400).json({ error: err.message }));
};

module.exports = {
  getEstados,
  registrarEstados,
  eliminarEstados,
  getMunicipiosDeEstado,
};
