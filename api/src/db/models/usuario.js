const { GENEROS } = require("#src/constants/usuarios.js");
const { initModelScopes } = require("#src/utils/db/scopes.js");
const { getScopesUsuario } = require("#src/db/scopes/usuario.js");

module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define(
    "usuario",
    {
      genero: {
        type: DataTypes.ENUM(GENEROS.HOMBRE, GENEROS.MUJER),
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
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 8,
        },
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 10,
        },
      },
    },
    {
      defaultScope: {
        attributes: { exclude: ["password"] },
      },
    }
  );

  usuario.associate = (models) => {
    initModelScopes(usuario, models, getScopesUsuario);

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
      as: {
        singular: "estadistico",
        plural: "estadisticos",
      },
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
  };

  return usuario;
};
