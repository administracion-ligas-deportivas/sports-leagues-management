module.exports = (sequelize, DataTypes) => {
  const partido = sequelize.define(
    "partido",
    {
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      notas: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      duracionPartido: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      efectuado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      cancelado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
    },
    {}
  );

  // Las relaciones se generan de esta manera
  // Tabla.relacion(talblaARelacionar, {as: nombre de Fk, onDelete: "cascade", onUpdate: 'cascade'});

  partido.associate = (models) => {
    partido.belongsTo(models.cancha, {
      foreignKey: {
        allowNull: false,
      },
    });

    partido.belongsTo(models.usuario, {
      foreignKey: { name: "estadisticoId", allowNull: false },
      as: "estadistico",
    });

    partido.belongsTo(models.eventoDeportivo, {
      foreignKey: {
        allowNull: false,
      },
    });

    partido.belongsToMany(models.equipo, {
      through: models.equipoPartido,
      as: {
        singular: "equipo",
        plural: "equipos",
      },
    });

    partido.hasMany(models.estadisticaJugadorPartido, {
      as: {
        singular: "estadisticaJugadorPartido",
        plural: "estadisticasJugadoresPartido",
      },
    });

    partido.addScope("withFullData", {
      include: [
        {
          model: models.equipo,
          as: "equipos",
          through: {
            attributes: ["puntos", "localVisitante"],
          },
        },
        models.cancha,
        {
          model: models.usuario,
          as: "estadistico",
        },
        {
          model: models.estadisticaJugadorPartido,
          as: "estadisticasJugadoresPartido",
        },
        models.eventoDeportivo,
      ],
      attributes: {
        exclude: [
          "canchaId",
          "estadisticoId",
          "eventoDeportivoId",
          "eventoDeportivoId",
        ],
      },
    });
  };
  return partido;
};
