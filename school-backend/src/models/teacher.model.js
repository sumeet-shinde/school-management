const mongoose = require("mongoose");

const mongoosePaginate = require("mongoose-paginate");

const teacherSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
    gender: { type: String, default: "Male", require: true },
    age: { type: Number, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
teacherSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("teachers", teacherSchema);
