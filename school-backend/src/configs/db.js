const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://#########:#########@cluster0.biezm.mongodb.net/school"
  );
};
