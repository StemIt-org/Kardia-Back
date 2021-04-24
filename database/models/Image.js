module.exports = function(Sequelize, DataTypes){
    let alias = "Image";
    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        name: DataTypes.STRING,
        postId: DataTypes.INTEGER
    }
    let config = {
        tableName: "images",
        timestamps: false,
        paranoid: false,
    }
    let Image = Sequelize.define(alias, cols, config);
    Image.associate = (models) => {
        Image.belongsTo(models.Post, {
            as: 'post',
            foreignKey: 'postId'
        })
    }
    
    return Image;
}