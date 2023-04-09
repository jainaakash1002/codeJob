const express = require("express");
// const exphbs = require("express-handlebars");
// const exphbs = require("express-handlebars");

const { engine } = require("express-handlebars");

const bodyParser = require("body-parser");
const path = require("path");
const db = require("./config/database");
// require("dotenv").config();

db.authenticate()
  .then(() => console.log("Database connect Mr Aakash"))
  .catch((err) => console.log("Error: " + err));

const app = express();

app.engine("handlebars", engine({ extname: ".hbs", defaultLayout: "main" }));
app.set("view engine", "handlebars");
// app.set("views", "./views");
// const app = express();

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

app.get("/", (req, res) => res.send("INDEX"));
app.use("/jobs", require("./routes/jobs"));

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(`Hi AAKASH, servers are up! Now you can play with the code 🥹`)
);
