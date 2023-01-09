const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstName: {
    required: [true, "Enter a firstName."],
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  username: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Users", userSchema);
