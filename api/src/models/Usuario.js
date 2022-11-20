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
    Usuario.hasOne(models.domicilio_usuario, {
      foreignKey: "usuario_id",
    });
    Usuario.hasMany(models.partido, {
      foreignKey: "estadistico_id",
    });
    Usuario.belongsTo(models.rol, {
      foreignKey: "rol_id",
    });
    Usuario.hasMany(models.formato_evento_deportivo, {
      foreignKey: "usuario_id",
    });
    Usuario.hasMany(models.pago_evento_deportivo, {
      foreignKey: "usuario_id",
    });
    Usuario.hasMany(models.estadistica_jugador_partido, {
      foreignKey: "jugador_id",
    });
    Usuario.hasMany(models.migracion_equipo_evento_deportivo, {
      foreignKey: "organizador_id",
    });
    Usuario.hasMany(models.equipo, {
      foreignKey: "encargado_equipo_id",
    });
    Usuario.hasOne(models.evento_deportivo, {
      foreignKey: "organizador_id",
    });
    Usuario.belongsToMany(models.evento_deportivo, {
      through: "estadistico_evento_deportivo",
      foreignKey: "estadistico_id",
    });
    Usuario.belongsToMany(models.equipo, {
      through: models.jugador_equipo,
    });
    Usuario.hasMany(models.Likes, { onDelete: "cascade" });
  };

  return Usuario;
};
