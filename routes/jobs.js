const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Jobs = require("../models/Jobs");

router.get("/", (req, res) =>
  Jobs.findAll()
    .then((jobs) => {
      // res.send(jobs);
      // res.sendStatus(200);
      const jobsJson = jobs.map((job) => job.toJSON());
      res.render("jobs", { jobs: jobsJson });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    })
);

router.get("/add", (req, res) => {
  res.render("add");
});

//add a job
// router.post("/add", (req, res) => {
//   const data = {
//     title: "Looking for a JavaScript Developer",
//     technologies: "javascript, html, css, bootstrap",
//     budget: "50000",
//     description:
//       "Hi, i am looking for a javascript developer job and my skills are html, css and github. Knows some javascript logics for modification.",
//     contact_email: "javascript@gmail.com",
//   };

//   let { title, technologies, budget, description, contact_email } = data;
//   Jobs.create({
//     title,
//     technologies,
//     budget,
//     description,
//     contact_email,
//   })
//     .then((jobs) => res.redirect("/jobs"))
//     .catch((err) => console.log(err));
// });

module.exports = router;
