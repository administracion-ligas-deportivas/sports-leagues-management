module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define(
    "usuario",
    {
      genero: {
        type: DataTypes.ENUM("hombre", "mujer"),
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apellido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fechaNacimiento: {
        type: DataTypes.DATEONLY,
      },
      correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
      telefono: {
        type: DataTypes.INTEGER,
      },

      tiempoRegistro: {
        type: DataTypes.DATE,
      },
    },
    {}
  );

  usuario.associate = (models) => {
    usuario.belongsTo(models.rol);

    usuario.belongsToMany(models.eventoDeportivo, {
      through: models.estadisticoEventoDeportivo,
      foreignKey: {
        name: "estadisticoId",
        foreignKey: {
          allowNull: false,
        },
      },
    });
    usuario.belongsToMany(models.equipo, {
      through: models.jugadorEquipo,
    });

    usuario.hasOne(models.domicilioUsuario);

    usuario.hasMany(models.eventoDeportivo, {
      foreignKey: "organizadorId",
    });
    usuario.hasMany(models.partido, {
      foreignKey: "estadisticoId",
    });

    usuario.hasMany(models.formatoEventoDeportivo, {
      foreignKey: "organizadorId",
    });
    usuario.hasMany(models.pagoEventoDeportivo, {
      foreignKey: "encargadoEquipoId",
    });
    usuario.hasMany(models.estadisticaJugadorPartido, {
      foreignKey: "jugadorId",
    });
    usuario.hasMany(models.migracionEquipoEventoDeportivo, {
      foreignKey: "organizadorId",
    });
    usuario.hasMany(models.equipo, {
      foreignKey: "encargadoEquipoId",
    });
    usuario.hasMany(models.like, { onDelete: "cascade" });
  };

  return usuario;
};
