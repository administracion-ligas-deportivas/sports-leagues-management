module.exports = (sequelize, DataTypes) => {
  const equipo_evento_deportivo = sequelize.define(
    "equipo_evento_deportivo",
    {
      evento_deportivo_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      equipo_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      paranoid: true,
    }
  );

  //Las relaciones se generan de esta manera
  //Tabla.relacion(talblaARelacionar, {as: nombre de Fk, onDelete: "cascade", onUpdate: 'cascade'});

  equipo_evento_deportivo.associate = (models) => {
    equipo_evento_deportivo.belongsTo(models.evento_deportivo, {
      foreignKey: "evento_deportivo_id",
    });
    equipo_evento_deportivo.belongsTo(models.equipo, {
      foreignKey: "equipo_id",
    });
  };
  return equipo_evento_deportivo;
};
