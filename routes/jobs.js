const express = require("express");
const router = express.Router();
const db = require("../config/database");
// const Jobs = require("../models/Jobs");

// router.get("/", (req, res) => res.send("JOBS"));

// router.get("/", (req, res) =>
//   Jobs.findAll()
//     .then((jobs) => {
//       console.log(jobs);
//       res.sendStatus(200);
//     })
//     .catch((err) => console.log(err))
// );

const Jobs = require("../models/Jobs");

router.get("/", (req, res) =>
  Jobs.findAll()
    .then((jobs) => {
      console.log(jobs);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);

//add a job

router.get("/add", (req, res) => {
  const data = {
    title: "Looking for a Angular Developer",
    technologies: "angular, typescript, chakraUi, tailwind",
    budget: "100000",
    description:
      "Hi, i am looking for a angular web developer job and my skills are html, css, tailwing, angular and github. Knows some ui frameworks as well like chakra ui , mui, antD.",
    contact_email: "happy@gmail.com",
  };

  let { title, technologies, budget, description, contact_email } = data;
  Jobs.create({
    title,
    technologies,
    budget,
    description,
    contact_email,
  })
    .then((jobs) => res.redirect("/jobs"))
    .catch((err) => console.log(err));
});

// router.get("/", async (req, res) => {
//   try {
//     const jobs = await Jobs.findAll();
//     res.json(jobs);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

module.exports = router;
