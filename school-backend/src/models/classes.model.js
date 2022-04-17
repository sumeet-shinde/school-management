const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema(
  {
    grade: { type: String, required: true },
    section: { type: String, required: true },
    subject: { type: String, required: true },
    teacherID: { type: mongoose.Schema.Types.ObjectId, ref: "teachers" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("classes", ClassSchema);
