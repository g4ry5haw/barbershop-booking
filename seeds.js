// const mongoose = require("mongoose");
require("dotenv").config();
const Appointments = require("./models/appointments.js");
const Users = require("./models/users.js");
const database = require("./connection.js");

const createAppointments = () => {
  const appointmentArray = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = 0; i < 28; i++) {
    const nextDay = new Date(today);
    nextDay.setDate(nextDay.getDate() + i);

    for (let j = 0; j < 8; j++) {
      const appointmentData = {};
      let timeSlot = 9 + j;
      if (timeSlot.toString().length === 1) {
        timeSlot = `0${timeSlot}`;
      }
      const timeSlotString = `${timeSlot}:00`;
      appointmentData.date = nextDay;
      appointmentData.time = timeSlotString;
      appointmentData.available = 1;
      appointmentArray.push(appointmentData);
    }
  }
  // console.log(appointmentArray);
  return appointmentArray;
};

// const seedAppointments = [
//   {
//     date: "2022-12-21",
//     time: "09:00",
//     username: "gs",
//   },
//   {
//     date: "2022-12-21",
//     time: "10:00",
//   },
//   {
//     date: "2022-12-21",
//     time: "11:00",
//     username: "gs",
//   },
//   {
//     date: "2022-12-21",
//     time: "12:00",
//   },
//   {
//     date: "2022-12-21",
//     time: "13:00",
//   },
//   {
//     date: "2022-12-21",
//     time: "14:00",
//   },
//   {
//     date: "2022-12-21",
//     time: "15:00",
//   },
//   {
//     date: "2022-12-21",
//     time: "16:00",
//   },
//   {
//     date: "2022-12-20",
//     time: "09:00",
//   },
//   {
//     date: "2022-12-20",
//     time: "10:00",
//   },
//   {
//     date: "2022-12-20",
//     time: "11:00",
//   },
//   {
//     date: "2022-12-20",
//     time: "12:00",
//     username: "gs",
//   },
//   {
//     date: "2022-12-20",
//     time: "13:00",
//   },
//   {
//     date: "2022-12-20",
//     time: "14:00",
//   },
//   {
//     date: "2022-12-20",
//     time: "15:00",
//   },
//   {
//     date: "2022-12-20",
//     time: "16:00",
//   },
// ];

const seedUsers = [
  {
    firstName: "Gary",
    lastName: "Shaw",
    email: "gary.shaw@gmx.co.uk",
    username: "gs",
    password: "password",
  },
  {
    firstName: "Nasser",
    lastName: "Benashur",
    email: "nasser@yahoo.com",
    username: "nb",
    password: "password",
  },
  {
    firstName: "Robbie",
    lastName: "McDonough",
    email: "robbie@hotmail.com",
    username: "rm",
    password: "password",
  },
  {
    firstName: "Ryan",
    lastName: "Nolan",
    email: "ryan@msn.com",
    username: "rn",
    password: "password",
  },
];

console.log(seedUsers);

const seedDB = async () => {
  await Appointments.deleteMany({});
  await Users.deleteMany({});
  await Appointments.insertMany(createAppointments());
  await Users.insertMany(seedUsers);
};

module.exports = seedDB;
