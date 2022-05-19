module.exports = (sequelize, DataTypes) => 
{
    const Anuncio = sequelize.define("Anuncio", {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        prioridad: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        descripcion:{
            type: DataTypes.STRING,
        }
    });

    return Anuncio;
};