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

    usuario.hasMany(models.eventoDeportivo);
    usuario.hasMany(models.partido);

    usuario.hasMany(models.formatoEventoDeportivo);
    usuario.hasMany(models.pagoEventoDeportivo);
    usuario.hasMany(models.estadisticaJugadorPartido);
    usuario.hasMany(models.migracionEquipoEventoDeportivo);
    usuario.hasMany(models.equipo);
    usuario.hasMany(models.like, { onDelete: "cascade" });
  };

  return usuario;
};
