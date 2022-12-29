const { eventoDeportivo } = require("#src/db/models/index.js");

const getEquiposFromEvento = async (eventoId) => {
  const evento = await eventoDeportivo.findByPk(eventoId);

  console.log({ evento });

  if (!evento) {
    return {
      error: "No se ha encontrado el evento",
      status: 404,
    };
  }

  // https://sequelize.org/docs/v6/core-concepts/assocs/#foobelongstomanybar--through-baz-
  /**
    For belongsToMany relationships, by default getBars() will return all fields
    from the join table. Note that any include options will apply to the target
    Bar object, so trying to set options for the join table as you would when
    eager loading with find methods is not possible. To choose what attributes
    of the join table to include, getBars() supports a joinTableAttributes
    option that can be used similarly to setting through.attributes in an
    include. As an example, given Foo belongsToMany Bar, the following will both
    output results without join table fields:
   */
  return await evento.getEquipos({ joinTableAttributes: [] });
};

module.exports = {
  getEquiposFromEvento,
};
