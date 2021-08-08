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
    "username": `${process.env.USERNAME_RDS}` || defaulDevelopsettings.username,
    "password": `${process.env.PASSWORD}` || defaulDevelopsettings.password,
    "database": `${process.env.DATABASE}` || defaulDevelopsettings.database,
    "host": `${process.env.ENDPOINT}` || defaulDevelopsettings.host,
    "dialect": "mysql"
  },
  "development": {
    "username": "root",
    "password": null,
    "database": "kardia_back",
    "host": "127.0.0.1",
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
