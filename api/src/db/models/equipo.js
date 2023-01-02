const { initModelScopes } = require("#src/utils/db/scopes.js");
const { getScopesEquipo } = require("#src/db/scopes/equipo.js");

module.exports = (sequelize, DataTypes) => {
  const equipo = sequelize.define(
    "equipo",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
    },
    {}
  );

  equipo.associate = (models) => {
    const {
      deporte,
      equipoEventoDeportivo,
      equipoPartido,
      eventoDeportivo,
      jugadorEquipo,
      migracionEquipoEventoDeportivo,
      pagoEventoDeportivo,
      partido,
      usuario,
    } = models;

    initModelScopes(equipo, models, getScopesEquipo, { sequelize });

    equipo.belongsTo(usuario, {
      foreignKey: {
        name: "encargadoEquipoId",
        allowNull: false,
      },
      as: "encargado",
    });
    equipo.belongsTo(deporte, {
      foreignKey: {
        allowNull: false,
      },
    });

    equipo.belongsToMany(usuario, {
      through: jugadorEquipo,
      as: {
        singular: "jugador",
        plural: "jugadores",
      },
    });
    equipo.belongsToMany(eventoDeportivo, {
      through: equipoEventoDeportivo,
    });
    equipo.belongsToMany(partido, {
      through: equipoPartido,
    });

    equipo.hasMany(pagoEventoDeportivo);
    equipo.hasMany(migracionEquipoEventoDeportivo);
  };
  return equipo;
};
