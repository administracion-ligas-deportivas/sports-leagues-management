module.exports = (sequelize, DataTypes) => {
  const cancha = sequelize.define(
    "cancha",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numero: {
        // Un número de cancha puede contener letras o dígitos.
        type: DataTypes.STRING,
      },
      descripcion: {
        type: DataTypes.TEXT,
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ["nombre", "numero", "deportivo_id"],
        },
      ],
    }
  );

  // Las relaciones se generan de esta manera
  // Tabla.relacion(talblaARelacionar, {as: nombre de Fk, onDelete: "cascade", onUpdate: 'cascade'});
  cancha.associate = (models) => {
    cancha.addScope("defaultScope", {
      include: [models.deportivo],
    });

    cancha.belongsTo(models.deportivo, {
      foreignKey: {
        allowNull: false,
      },
    });
    cancha.hasMany(models.partido);
  };

  return cancha;
};
