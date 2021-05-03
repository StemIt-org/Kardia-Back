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
        createdAt: DataTypes.DATE,
        updatedAt:DataTypes.DATE,
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
        }),
            Post.hasMany(models.Image, {
            onDelete: 'cascade',
            as: 'postImages',
            foreignKey: 'postId'
        })
    }
    return Post;
}