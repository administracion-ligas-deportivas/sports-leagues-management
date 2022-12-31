const { equipo, usuario, deporte } = require("#src/db/models/index.js");

const getEquipos = async (req, res) => {
  const equipos = await equipo.findAll({
    include: [
      {
        model: usuario,
        as: "jugador",
      },
      {
        model: deporte,
      },
    ],
  });

  return res.json({ equipos });
};

const getEquipoById = async (req, res) => {
  const { equipoId } = req.params;

  const foundEquipo = await equipo
    .scope("includeEverything")
    .findByPk(equipoId);

  return res.json(foundEquipo);
};

module.exports = {
  getEquipos,
  getEquipoById,
};
