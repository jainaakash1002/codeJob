// const Sequelize = require("sequelize");
// const db = require("../config/database");

// // const Jobs = db.define("jobs", {
// //   title: {
// //     type: DataTypes.STRING,
// //   },
// //   technologies: {
// //     type: DataTypes.STRING,
// //   },
// //   description: {
// //     type: DataTypes.STRING,
// //   },
// //   budget: {
// //     type: DataTypes.STRING,
// //   },
// //   contact_email: {
// //     type: DataTypes.STRING,
// //   },
// // });

// // module.exports = Jobs;

// // user model
// module.exports = (db, DataTypes) => {
//   const Jobs = db.define(
//     "jobs",
//     {
//       title: {
//         type: DataTypes.STRING,
//       },
//       technologies: {
//         type: DataTypes.STRING,
//       },
//       description: {
//         type: DataTypes.STRING,
//       },
//       budget: {
//         type: DataTypes.STRING,
//       },
//       contact_email: {
//         type: DataTypes.STRING,
//       },
//     },
//     { timestamps: true }
//   );
//   return Jobs;
// };

// db.sync()
//   .then(() => {
//     console.log("Table created successfully");
//   })
//   .catch((error) => {
//     console.error("Error syncing table:", error);
//   });

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

// Jobs.sync()
//   .then(() => {
//     console.log("Jobs table created successfully");
//   })
//   .catch((error) => {
//     console.error("Unable to create jobs table:", error);
//   });

module.exports = Jobs;
