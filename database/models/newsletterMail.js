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
    };
    let config = {
        tableName: "newsletterMails",
        timesTamps: false,
        paranoid: false
    }
    let NewsletterMail = Sequelize.define(alias, cols, config);

    return NewsletterMail;
}