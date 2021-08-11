require('dotenv').config()
const defaulDevelopsettings = {
  "username": "root",
  "password": null,
  "database": "kardia_back",
  "host": "127.0.0.1",
  "dialect": "mysql"
};

module.exports = {
  "development": {
    "username": `${process.env.USERNAME_RDS}`,
    "password": `${process.env.PASSWORD_RDS}`,
    "database": `${process.env.DATABASE_RDS}`,
    "host": `${process.env.ENDPOINT_RDS}`,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
