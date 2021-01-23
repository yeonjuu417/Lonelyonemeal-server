require("dotenv").config();
module.exports = {
  "development": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": process.env.DATABASE_HOST,
    "dialect": "mysql",
    "port":process.env.DATABASE_PORT
  },
  "test": {
    "username": "root",
    "password": process.env.DATABASE_LOCALPASSWORD,
    "database": process.env.DATABASE_TESTDB,
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": '3306'
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
