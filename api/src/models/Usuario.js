module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    "Usuario",
    {
      rol_id: {
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
      fecha_nacimiento: {
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

      tiempo_registro: {
        type: DataTypes.DATE,
      },

      municipio_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      paranoid: true,
    }
  );

  /*  Usuario.associate = (models) => {
    Usuario.hasOne(models.domicilio_usuario, {
      foreignKey: "usuario_id",
      as: "domicilio_usuario_usuario_id",
    });
    Usuario.belongsTo(models.Municipio, {
      foreignKey: "municipio_id",
      as: "usuario_municipio_id",
    });
    Usuario.hasMany(models.Likes, { onDelete: "Cascade" });
  };
  2; */
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
    Usuario.hasMany(models.jugador_equipo, {
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
    Usuario.hasOne(models.evento_deportivo, {
      foreignKey: "organizador_id",
    });
    Usuario.belongsToMany(models.evento_deportivo, {
      through: "estadistico_evento_deportivo",
      foreignKey: "estadistico_id",
    });
    Usuario.hasMany(models.Likes, { onDelete: "cascade" });
  };

  return Usuario;
};