module.exports = (sequelize, DataTypes) => {
  const partido = sequelize.define("partido", {
    evento_deportivo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cancha_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    notas: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    duracion_partido: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  });

  //Las relaciones se generan de esta manera
  //Tabla.relacion(talblaARelacionar, {as: nombre de Fk, onDelete: "cascade", onUpdate: 'cascade'});

  partido.associate = (models) => {
    partido.belongsTo(models.evento_deportivo, {
      foreignKey: "evento_deportivo_id",
      as: "partido_evento_deportivo_id",
    });
    partido.belongsTo(models.cancha, {
      foreignKey: "cancha_id",
      as: "partido_cancha_id",
    });
  };
  return partido;
};
