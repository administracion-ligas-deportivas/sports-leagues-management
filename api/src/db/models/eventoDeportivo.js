module.exports = (sequelize, DataTypes) => {
  const eventoDeportivo = sequelize.define(
    "eventoDeportivo",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fechaInicio: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      fechaFinalizacion: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      descripcionPagos: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
    },
    {
      tableName: "evento_deportivo",
    }
  );

  eventoDeportivo.associate = (models) => {
    const {
      deporte,
      equipo,
      equipoEventoDeportivo,
      estadisticoEventoDeportivo,
      formatoEventoDeportivo,
      migracionEquipoEventoDeportivo,
      pagoEventoDeportivo,
      partido,
      usuario,
    } = models;

    // eventoDeportivo.addScope("defaultScope", {});

    eventoDeportivo.addScope("generalData", {
      include: [formatoEventoDeportivo, { model: usuario, as: "organizador" }],
      attributes: {
        exclude: ["organizadorId", "formatoEventoDeportivoId"],
      },
    });

    eventoDeportivo.addScope("includeEverything", {
      include: [
        formatoEventoDeportivo,
        {
          model: equipo,
          through: {
            attributes: [],
          },
        },
        { model: usuario, as: "organizador" },
        {
          model: usuario,
          as: "estadisticos",
          // No obtener atributos de la tabla pivote, "estadisticoEventoDeportivo".
          through: {
            attributes: [],
          },
        },
      ],
      attributes: {
        exclude: ["organizadorId", "formatoEventoDeportivoId"],
      },
    });

    eventoDeportivo.addScope("withFormato", {
      include: [
        {
          model: formatoEventoDeportivo,
          include: ["deporte", "tipoEventoDeportivo"],
          attributes: {
            exclude: ["deporteId", "tipoEventoDeportivoId"],
          },
        },
      ],
    });

    eventoDeportivo.addScope("withPartidos", {
      include: partido,
    });

    eventoDeportivo.addScope("withEstadisticos", {
      include: {
        model: usuario,
        as: "estadisticos",
        // No obtener atributos de la tabla pivote,
        // "estadisticoEventoDeportivo".

        through: {
          attributes: [],
        },
      },
    });

    eventoDeportivo.addScope("withPagos", {
      include: pagoEventoDeportivo,
    });

    eventoDeportivo.belongsTo(formatoEventoDeportivo, {
      foreignKey: {
        // Los formatos son opcionales.
        allowNull: true,
      },
    });

    eventoDeportivo.belongsTo(usuario, {
      foreignKey: {
        name: "organizadorId",
        allowNull: false,
      },
      as: "organizador",
    });

    eventoDeportivo.belongsTo(deporte, {
      allowNull: true,
    });

    eventoDeportivo.belongsToMany(usuario, {
      through: estadisticoEventoDeportivo,
      as: {
        // https://sequelize.org/docs/v6/other-topics/naming-strategies/#overriding-singulars-and-plurals-when-defining-aliases
        singular: "estadistico",
        plural: "estadisticos",
      },
      foreignKey: { name: "evento_deportivo_id", allowNull: false },
    });

    eventoDeportivo.belongsToMany(equipo, {
      through: equipoEventoDeportivo,
    });

    eventoDeportivo.hasMany(pagoEventoDeportivo);
    eventoDeportivo.hasMany(partido);

    eventoDeportivo.hasMany(migracionEquipoEventoDeportivo, {
      foreignKey: "eventoDeportivoOrigenId",
    });

    eventoDeportivo.hasMany(migracionEquipoEventoDeportivo, {
      foreignKey: "eventoDeportivoDestinoId",
    });
  };

  return eventoDeportivo;
};
