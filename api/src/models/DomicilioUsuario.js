module.exports = (sequelize, DataTypes) => {
  const DomicilioUsuario = sequelize.define(
    "DomicilioUsuario",
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
      modelName: "DomicilioUsuario",
      paranoid: true,
    }
  );

  //Las relaciones se generan de esta manera
  //Tabla.relacion(talblaARelacionar, {as: nombre de Fk, onDelete: "cascade", onUpdate: 'cascade'});

  DomicilioUsuario.associate = (models) => {
    DomicilioUsuario.belongsTo(models.Municipio, {
      foreignKey: "municipio_id",
    });
    DomicilioUsuario.belongsTo(models.Usuario, {
      foreignKey: "usuario_id",
    });
  };
  return DomicilioUsuario;
};
