const mongoose = require("mongoose");
const connectDB = (uir) => {
  mongoose.connect(uir);
  console.log("success");
};
module.exports = connectDB;
