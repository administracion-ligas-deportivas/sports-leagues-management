module.exports = (sequelize, DataTypes) => 
{
    const Comentario = sequelize.define('Comentario', {
        comentario: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Comentario;
};