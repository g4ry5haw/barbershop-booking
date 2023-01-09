const express = require("express");
const router = express.Router();
const Appointments = require("../models/appointments");
const Users = require("../models/users.js");

//Get all appointments
// router.get("/appointments", async (req, res) => {
//   console.log("Testing appointments");
//   try {
//     const data = await Appointments.find();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// Get all users
// router.get("/users", async (req, res) => {
//   console.log("hello users");
//   try {
//     const data = await Users.find();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// //Get by ID Method
router.get("/getOne/:id", async (req, res) => {
  // res.send(req.params.id);
  try {
    const data = await Appointments.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// //Update by ID Method
// router.patch("/update/:id", async (req, res) => {
//   // res.send("Update by ID API");
//   try {
//     const id = req.params.id;
//     const updatedData = req.body;
//     const options = { new: true };
//     // const result = await Model.findByIdAndUpdate(id, updatedData);
//     const result = await Model.findByIdAndUpdate(id, updatedData, options);
//     res.send(result);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });
// //Delete by ID Method
// router.delete("/delete/:id", (req, res) => {
//   res.send("Delete by ID API");
// });

module.exports = router;
