module.exports = (sequelize, DataTypes) => 
{
    const Estado = sequelize.define("Estado", {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Estado.associate = function(models){
        Estado.hasMany(models.Municipio, {as: 'municipios'});
    };

    return Estado;
};