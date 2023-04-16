const express = require("express");
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./config/database");

db.authenticate()
  .then(() => console.log("Hey there Mr Aakash😎, Database is connect now."))
  .catch((err) => console.log("Error🥲 : " + err));

const app = express();

app.engine("handlebars", engine({ extname: ".hbs", defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => res.render("index", { layout: "landing" }));
app.use("/jobs", require("./routes/jobs"));

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(
    `Hi AAKASH Sir, Servers are up! Now you can play with the code. 🥹`
  )
);
