module.exports = function (Sequelize, DataTypes) {
    let alias = "PostType";
    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        name: DataTypes.STRING
    };
    let config = {
        tableName: "poststypes",
        timestamps: false,
        paranoid: false
    };
    let PostType = Sequelize.define(alias, cols, config);
    PostType.associate = (models) => {
        PostType.hasMany(models.Post, {
            as: 'posts',
            foreignKey: 'postTypeId'
        })
    }
    return PostType;
}