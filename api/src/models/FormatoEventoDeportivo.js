module.exports = (sequelize, DataTypes) => {
  const FormatoEventoDeportivo = sequelize.define(
    "FormatoEventoDeportivo",
    {
      deporte_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tipo_evento_deportivo_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      maximo_equipos: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      paranoid: true,
    }
  );

  FormatoEventoDeportivo.associate = (models) => {
    FormatoEventoDeportivo.belongsTo(models.Deporte, {
      foreignKey: "deporte_id",
    });
    FormatoEventoDeportivo.hasMany(models.EventoDeportivo, {
      foreignKey: "formato_evento_deportivo_id",
    });

    FormatoEventoDeportivo.belongsTo(models.tipo_evento_deportivo, {
      foreignKey: "tipo_evento_deportivo_id",
    });
    FormatoEventoDeportivo.belongsTo(models.Usuario, {
      foreignKey: "usuario_id",
    });
  };

  return FormatoEventoDeportivo;
};
