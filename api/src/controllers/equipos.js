const { equiposService } = require("#src/services/equipos/index.js");

const getEquipos = async (req, res) => {
  const equipos = await equiposService.getAllEquipos();

  return res.json({
    total: equipos.length,
    equipos,
  });
};

const getEquipoById = async (req, res) => {
  const { equipoId } = req.params;

  const foundEquipo = await equiposService.getEquipoById(equipoId);

  return res.json(foundEquipo);
};

/**
 * TODO - Revisar que el jugador tenga el rol de USUARIO.
 */
const inscribirJugadorEnEquipo = async (req, res) => {
  const { uuid: equipoUuid } = req.params;
  const { id: jugadorId } = req.user;

  try {
    const jugadoresInscritos = await equiposService.inscribirJugadorEnEquipo(
      equipoUuid,
      jugadorId
    );

    console.log({ jugadoresInscritos });

    if (!jugadoresInscritos) {
      return res.status(400).json({
        error: "No se pudo inscribir al jugador.",
      });
    }

    return res.json({
      message: "Jugador inscrito exitosamente.",
    });
  } catch {
    return res.status(400).json({
      error: "No se pudo inscribir al jugador.",
      // error: "El jugador ya está inscrito en el equipo.",
    });
  }
};

module.exports = {
  getEquipos,
  getEquipoById,
  inscribirJugadorEnEquipo,
};
