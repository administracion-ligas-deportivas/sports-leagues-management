const SEQUELIZE_ERROR_NAMES = {
  SequelizeForeignKeyConstraintError: "SequelizeForeignKeyConstraintError",
};

const SEQUELIZE_ERROR_HANDLERS = {
  // Add Sequelize validation error handler
  SequelizeValidationError: (res, { errors }) => {
    console.log("ValidationError");
    const errorMessages = errors.map(({ message }) => message);

    res.status(400).json({ error: errorMessages });
  },

  // No funciona.
  SequelizeForeignKeyConstraintError: (res, error) => {
    const { fields } = error;

    const foreignKeysString = fields.map((string) => `'${string}'`).join(", ");

    const singularSentence = "la siguiente llave foránea";
    const pluralSentence = singularSentence
      .split(" ")
      .map((string) => string + "s")
      .join(" ");

    const sentence = fields.length > 1 ? pluralSentence : singularSentence;

    res.status(400).json({
      error: `Ha ocurrido un error con ${sentence}: ${foreignKeysString}`,
    });
  },
  default: (res) =>
    res.status(400).json({ error: "No se ha podido crear el recurso" }),
};

module.exports = {
  SEQUELIZE_ERROR_NAMES,
  SEQUELIZE_ERROR_HANDLERS,
};
