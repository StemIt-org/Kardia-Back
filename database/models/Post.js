module.exports = function (Sequelize, DataTypes) {
    let alias = "Post";
    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        title: DataTypes.STRING,
        body: DataTypes.STRING,
        extra: DataTypes.STRING,
        images: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt:DataTypes.DATE,
        dateEnd: DataTypes.DATE,
        postTypeId: DataTypes.INTEGER,
    };
    let config = {
        tableName: "posts",
        timesTamps: false,
        paranoid: false
    }
    let Post = Sequelize.define(alias, cols, config);
    Post.associate = (models) => {
        Post.belongsTo(models.PostType, {
            as: "postType",
            foreignKey: 'postTypeId'
        })
    }
    return Post;
}