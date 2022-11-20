module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    "Usuario",
    {
      rolId: {
        type: DataTypes.INTEGER,
      },
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

      municipioId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      paranoid: true,
      underscored: true,
    }
  );

  Usuario.associate = (models) => {
    Usuario.hasOne(models.DomicilioUsuario, {
      foreignKey: "usuario_id",
    });
    Usuario.hasMany(models.Partido, {
      foreignKey: "estadistico_id",
    });
    Usuario.belongsTo(models.rol, {
      foreignKey: "rol_id",
    });
    Usuario.hasMany(models.FormatoEventoDeportivo, {
      foreignKey: "usuario_id",
    });
    Usuario.hasMany(models.PagoEventoDeportivo, {
      foreignKey: "usuario_id",
    });
    Usuario.hasMany(models.EstadisticaJugadorPartido, {
      foreignKey: "jugador_id",
    });
    Usuario.hasMany(models.MigracionEquipoEventoDeportivo, {
      foreignKey: "organizador_id",
    });
    Usuario.hasMany(models.Equipo, {
      foreignKey: "encargado_equipo_id",
    });
    Usuario.hasOne(models.EventoDeportivo, {
      foreignKey: "organizador_id",
    });
    Usuario.belongsToMany(models.EventoDeportivo, {
      through: "estadistico_evento_deportivo",
      foreignKey: "estadistico_id",
    });
    Usuario.belongsToMany(models.Equipo, {
      through: models.JugadorEquipo,
    });
    Usuario.hasMany(models.Likes, { onDelete: "cascade" });
  };

  return Usuario;
};
