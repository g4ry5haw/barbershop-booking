const mongoose = require("mongoose");
const appointmentSchema = new mongoose.Schema({
  date: {
    required: true,
    type: Date,
  },
  time: {
    required: true,
    type: String,
  },
  username: {
    required: false,
    type: String,
  },
  available: {
    required: true,
    type: Number,
  },
});

module.exports = mongoose.model("Appointments", appointmentSchema);
