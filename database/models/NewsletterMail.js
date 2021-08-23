module.exports = function (Sequelize, DataTypes) {
    let alias = "NewsletterMail";
    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        createdAt:{
            type: DataTypes.DATE,
            defaultValue: Date.now()
        },
        updatedAt:{
            type: DataTypes.DATE,
            defaultValue: Date.now()
        }
    };
    let config = {
        tableName: "NewsletterMail",
        timesTamps: true,
        paranoid: false
    }
    let NewsletterMail = Sequelize.define(alias, cols, config);

    return NewsletterMail;
}