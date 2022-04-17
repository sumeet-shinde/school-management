const express = require("express");

const mongoose = require("mongoose");

const app = express();

const connect = require("./configs/db");

const { register, login } = require("./controllers/auth.controller");

const teacherController = require("./controllers/teacher.controller");

const classesController = require("./controllers/classes.contoller");

var cors = require("cors");

app.use(cors());

app.use(express.json());

app.post("/register", register);

app.post("/login", login);

app.use("/teachers", teacherController);

app.use("/classes", classesController);

app.listen(process.env.PORT || 8080, async (req, res) => {
  try {
    await connect();
    console.log("Listening on port 8080");
  } catch (error) {
    console.log(error.message);
  }
});
