const { equipo, usuario, deporte } = require("../db/models");

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
  const foundEquipo = await equipo.findByPk(equipoId);
  return res.json({
    ...foundEquipo,
    jugadores: await foundEquipo.getJugadors(),
  });
};

module.exports = {
  getEquipos,
  getEquipoById,
};
