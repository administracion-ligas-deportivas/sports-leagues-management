const { formatoEventoDeportivo, deporte } = require("#src/db/models/index.js");

const getFormatos = async (req, res) => {
  const formatos = await formatoEventoDeportivo.findAll({
    include: {
      model: deporte,
    },
  });

  return res.json({
    total: formatos.length,
    formatos,
  });
};

const getFormatoById = async (req, res) => {
  const { formatoId } = req.params;
  const formato = await formatoEventoDeportivo.findByPk(formatoId);

  return res.json(formato);
};

const createFormatoEvento = async (req, res) => {
  const { body: formatoEvento, user } = req;

  try {
    const createdEvento = await formatoEventoDeportivo.create({
      ...formatoEvento,
      organizadorId: user.id,
    });

    res.status(201).json(createdEvento);
  } catch (error) {
    console.log({ error });

    return res
      .status(400)
      .json({ error: "No se ha podido crear el formato de evento" });
  }
};
module.exports = {
  getFormatos,
  getFormatoById,
  createFormatoEvento,
};
