require("dotenv").config();
const Sequelize = require("sequelize");

let URL = "";
const {
  PGHOST,
  PGDATABASE,
  PGUSER,
  PGPASSWORD,
  ENDPOINT_ID,
  POSTGRESQL_ADDON_USER,
  POSTGRESQL_ADDON_PASSWORD,
  POSTGRESQL_ADDON_HOST,
  POSTGRESQL_ADDON_PORT,
  POSTGRESQL_ADDON_DB,
} = process.env;

switch (process.env.NODE_ENV) {
  case "testing":
    URL = `postgresql://${POSTGRESQL_ADDON_USER}:${POSTGRESQL_ADDON_PASSWORD}@${POSTGRESQL_ADDON_HOST}:${POSTGRESQL_ADDON_PORT}/${POSTGRESQL_ADDON_DB}`;
    break;
  case "development":
    URL = `postgres://${PGUSER}:${PGPASSWORD}@${ENDPOINT_ID}.${PGHOST}/${PGDATABASE}?sslmode=require`;
    break;
  default:
    URL = `postgres://${PGUSER}:${PGPASSWORD}@${ENDPOINT_ID}.${PGHOST}/${PGDATABASE}?sslmode=require`;
}

module.exports = new Sequelize(URL, {
  dialect: "postgres",
});
