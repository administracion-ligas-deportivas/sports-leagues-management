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
      through: "estadistico_evento_deportivo",
      foreignKey: "estadistico_id",
    });
    usuario.belongsToMany(models.equipo, {
      through: models.jugadorEquipo,
    });

    usuario.hasOne(models.domicilioUsuario);
    usuario.hasOne(models.eventoDeportivo, {
      foreignKey: "organizador_id",
    });

    usuario.hasMany(models.partido, {
      foreignKey: "estadistico_id",
    });
    usuario.hasMany(models.formatoEventoDeportivo);
    usuario.hasMany(models.pagoEventoDeportivo);
    usuario.hasMany(models.estadisticaJugadorPartido, {
      foreignKey: "jugador_id",
    });
    usuario.hasMany(models.migracionEquipoEventoDeportivo, {
      foreignKey: { name: "organizadorId", allowNull: false },
    });
    usuario.hasMany(models.equipo);
    usuario.hasMany(models.like, { onDelete: "cascade" });
  };

  return usuario;
};
