module.exports = (sequelize, DataTypes) => {
  const DomicilioUsuario = sequelize.define(
    "DomicilioUsuario",
    {
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
      paranoid: true,
    }
  );

  //Las relaciones se generan de esta manera
  //Tabla.relacion(talblaARelacionar, {as: nombre de Fk, onDelete: "cascade", onUpdate: 'cascade'});

  DomicilioUsuario.associate = (models) => {
    DomicilioUsuario.belongsTo(models.Municipio);
    DomicilioUsuario.belongsTo(models.Usuario);
  };
  return DomicilioUsuario;
};
