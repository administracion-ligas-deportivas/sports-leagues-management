module.exports = (sequelize, DataTypes) => {
  const anuncio = sequelize.define("anuncio", {
    prioridad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
    autor: {
      type: DataTypes.STRING,
    },
  });

  anuncio.associate = (models) => {
    // Las relaciones se generan de esta manera
    // Tabla.relacion(talblaARelacionar, {as: nombre de Fk, onDelete: "cascade", onUpdate: 'cascade'});
    anuncio.hasMany(models.comentario, { as: "comentarios" });
    anuncio.hasMany(models.like);
  };

  return anuncio;
};
