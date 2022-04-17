const express = require("express");

const Teacher = require("../models/teacher.model");

const Class = require("../models/classes.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const teacher = await Teacher.create({
      name: req.body.name,
      gender: req.body.gender,
      age: req.body.age,
    });

    res.status(200).send(teacher);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.get("", async (req, res) => {
  try {
    const { page, perPage } = req.query;

    const options = {
      page: parseInt(page, 10) || 1,
      limit: parseInt(perPage, 10) || 10,
    };

    const teachers = await Teacher.paginate({}, options);

    res.status(200).send(teachers);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.get("/:name", async (req, res) => {
  try {
    const teachers = await Teacher.findOne({ name: req.params.name })
      .lean()
      .exec();

    const ID = teachers._id;

    const classes = await Class.find({ teacherID: ID }).lean().exec();

    res.status(200).send(classes);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
