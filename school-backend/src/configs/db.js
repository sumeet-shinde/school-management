const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://sumeetfw14:sumeetfw14263@cluster0.biezm.mongodb.net/school"
  );
};
