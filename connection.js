require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("database connected...");
});

module.exports = database;
