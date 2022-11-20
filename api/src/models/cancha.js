module.exports = (sequelize, DataTypes) => {
  const Cancha = sequelize.define(
    "Cancha",
    {
      numero: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      paranoid: true,
    }
  );

  //Las relaciones se generan de esta manera
  //Tabla.relacion(talblaARelacionar, {as: nombre de Fk, onDelete: "cascade", onUpdate: 'cascade'});

  Cancha.associate = (models) => {
    Cancha.belongsTo(models.deportivo);
    Cancha.hasMany(models.partido);
  };
  return Cancha;
};
