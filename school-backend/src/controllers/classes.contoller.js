const mongoose = require("mongoose");

const express = require("express");

const Class = require("../models/classes.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const classes = await Class.create({
      grade: req.body.grade,
      section: req.body.section,
      subject: req.body.subject,
      teacherID: req.body.teacherID,
    });

    res.status(200).send(classes);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.get("", async (req, res) => {
  try {
    const classes = await Class.find().lean().exec();

    res.status(200).send(classes);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.get("/:subject", async (req, res) => {
  try {
    const classes = await Class.find({ subject: req.params.subject })
      .lean()
      .exec();

    res.status(200).send(classes);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.get("/:section", async (req, res) => {
  try {
    const classes = await Class.find({ section: req.params.section })
      .lean()
      .exec();

    res.status(200).send(classes);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.get("/:grade", async (req, res) => {
  try {
    const classes = await Class.find({ grade: req.params.grade }).lean().exec();

    res.status(200).send(classes);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
