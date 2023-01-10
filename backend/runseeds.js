const mongoose = require("mongoose");
const seed = require("./seeds");
seed().then(() => {
  mongoose.connection.close();
});
