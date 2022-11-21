module.exports = (sequelize, DataTypes) => {
  const domicilioUsuario = sequelize.define(
    "domicilioUsuario",
    {
      calle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      colonia: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      codigoPostal: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numeroExterior: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numeroInterior: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "domicilio_usuario",
    }
  );

  // Las relaciones se generan de esta manera
  // Tabla.relacion(talblaARelacionar, {as: nombre de Fk, onDelete: "cascade", onUpdate: 'cascade'});

  domicilioUsuario.associate = (models) => {
    domicilioUsuario.belongsTo(models.municipio, {
      foreignKey: {
        name: "municipioId",
        allowNull: false,
      },
    });
    domicilioUsuario.belongsTo(models.usuario, {
      foreignKey: {
        name: "usuarioId",
        allowNull: false,
      },
    });
  };
  return domicilioUsuario;
};
