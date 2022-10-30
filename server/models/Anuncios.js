module.exports = (sequelize, DataTypes) => {
  const Anuncio = sequelize.define(
    "Anuncio",
    {
      prioridad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING,
      },
      autor: {
        type: DataTypes.STRING /* ,
      allowNull: false, */,
      },
    },
    {
      paranoid: true,
    }
  );

  Anuncio.associate = (models) => {
    //Las relaciones se generan de esta manera
    //Tabla.relacion(talblaARelacionar, {as: nombre de Fk, onDelete: "cascade", onUpdate: 'cascade'});
    Anuncio.hasMany(models.Comentario, { as: "comentarios" });
    Anuncio.hasMany(models.Likes);
  };

  return Anuncio;
};
