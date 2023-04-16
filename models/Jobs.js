const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Jobs = db.define("jobs", {
  technologies: {
    type: DataTypes.STRING,
  },
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  contact_email: {
    type: DataTypes.STRING,
  },
  budget: {
    type: DataTypes.STRING,
  },
});

Jobs.sync()
  .then(() => {
    console.log("Jobs table created successfully");
  })
  .catch((error) => {
    console.error("Unable to create jobs table:", error);
  });

module.exports = Jobs;
