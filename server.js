require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
// mongoose.connect("mongodb://localhost:27017");
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("database connected...");
});

app.use(express.json());
const apptRouter = require("./routes/routes");
app.use("/api", apptRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
