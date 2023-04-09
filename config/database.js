require("dotenv").config();
const Sequelize = require("sequelize");

let URL = "";
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

switch (process.env.NODE_ENV) {
  case "development":
    URL = `postgres://${PGUSER}:${PGPASSWORD}@${ENDPOINT_ID}.${PGHOST}/${PGDATABASE}?sslmode=require`;
    break;
  default:
    URL = `postgres://${PGUSER}:${PGPASSWORD}@${ENDPOINT_ID}.${PGHOST}/${PGDATABASE}?sslmode=require`;
}

module.exports = new Sequelize(URL, {
  dialect: "postgres",
  // define: { freezeTableName: true },
});
