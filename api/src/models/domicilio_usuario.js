module.exports = (sequelize, DataTypes) => {
  const domicilio_usuario = sequelize.define(
    "domicilio_usuario",
    {
      usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      municipio_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      calle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      colonia: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      codigo_postal: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numero_exterior: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numero_interior: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      modelName: "domicilio_usuario",
      paranoid: true,
    }
  );

  //Las relaciones se generan de esta manera
  //Tabla.relacion(talblaARelacionar, {as: nombre de Fk, onDelete: "cascade", onUpdate: 'cascade'});

  domicilio_usuario.associate = (models) => {
    domicilio_usuario.belongsTo(models.Municipio, {
      foreignKey: "municipio_id",
    });
    domicilio_usuario.belongsTo(models.Usuario, {
      foreignKey: "usuario_id",
    });
  };
  return domicilio_usuario;
};
