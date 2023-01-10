const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
  number: {
    required: true,
    type: Number,
  },
  available: {
    required: true,
    type: Boolean,
  },
});

module.exports = mongoose.model("Data", dataSchema);
