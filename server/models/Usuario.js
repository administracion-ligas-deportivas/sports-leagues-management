module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        nombre:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contrasenia: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefono: {
            type: DataTypes.INTEGER,
        },
        municipio_id: {
            type: DataTypes.INTEGER
        }

    });

    Usuario.associate = (models) =>
    {
        Usuario.belongsTo(models.Municipio, {foreignKey: 'municipio_id', as: 'usuario_municipio_id'});
        Usuario.hasMany(models.Likes, {onDelete: 'Cascade'});
    };2

    return Usuario;
};
