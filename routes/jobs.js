const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Jobs = require("../models/Jobs");
const Sequalize = require("sequelize");
const Op = Sequalize.Op;

//all jobs
router.get("/", (req, res) =>
  Jobs.findAll()
    .then((jobs) => {
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
router.post("/add", (req, res) => {
  let { title, technologies, budget, description, contact_email } = req.body;
  let errors = [];

  if (!title) {
    errors.push({ text: "Please add the title of your Job!" });
  }
  if (!technologies) {
    errors.push({
      text: "Please add the relevant technologies w.r.t your knowledge!",
    });
  }
  if (!description) {
    errors.push({
      text: "Please specify your description so we could finally know your skills better!",
    });
  }
  if (!contact_email) {
    errors.push({ text: "Please add your contact email!" });
  }

  if (errors.length > 0) {
    res.render("add", {
      errors,
      title,
      technologies,
      budget,
      description,
      contact_email,
    });
  } else {
    if (!budget) {
      budget = "Unknown";
    } else {
      budget = `Rs.${budget}`;
    }

    technologies = technologies.toLowerCase().replace(/,/g, ",");

    Jobs.create({
      title,
      technologies,
      budget,
      description,
      contact_email,
    })
      .then((jobs) => res.redirect("/jobs"))
      .catch((err) => console.log(err));
  }
});

//search api
router.get("/search", (req, res) => {
  let { term } = req.query;
  term = term.toLowerCase();
  Jobs.findAll({ where: { technologies: { [Op.like]: "%" + term + "%" } } })
    .then((jobs) => {
      const jobsJson = jobs.map((job) => job.toJSON());
      res.render("jobs", { jobs: jobsJson });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
