require('dotenv').config()
const defaulDevelopsettings = {
  "username": "root",
  "password": null,
  "database": "kardia_back",
  "host": "127.0.0.1",
  "dialect": "mysql"
};
// || defaulDevelopsettings.username
// || defaulDevelopsettings.password
// || defaulDevelopsettings.database
// || defaulDevelopsettings.host
// USERNAME_RDS=root
// PASSWORD=Julian10
// DATABASE=kardiadev
// ENDPOINT=kardiadev.cs4901g4yrbg.us-east-1.rds.amazonaws.com

module.exports = {
  // "development": {
  //   "username": `${process.env.USERNAME_RDS}`,
  //   "password": `${process.env.PASSWORD}`,
  //   "database": `${process.env.DATABASE}`,
  //   "host": `${process.env.ENDPOINT}`,
  //   "dialect": "mysql"
  // },
  "development": {
    "username": `root`,
    "password": `Julian10`,
    "database": `kardiadev`,
    "host": `kardiadev.cs4901g4yrbg.us-east-1.rds.amazonaws.com`,
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
