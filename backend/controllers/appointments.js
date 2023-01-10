const Appointments = require("../models/appointments");

exports.getAppointments = async (req, res, next) => {
  // const { days } = req.query;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  try {
    const appointments = await Appointments.aggregate([
      { $match: { date: { $gte: today } } },
      // { $match: { username: { $exists: false } } },
      { $group: { _id: "$date", count: { $sum: "$available" } } },
      { $sort: { _id: 1 } },
    ]);
    res.status(200).send({ appointments });
  } catch (error) {
    next(error);
  }
};

exports.getAppointmentsByDate = async (req, res, next) => {
  const { date } = req.params;

  try {
    const appointments = await Appointments.find({
      date: { $eq: new Date(date) },
    }).sort({ time: 1 });

    if (appointments.length > 0) {
      res.status(200).send({ appointments });
    } else {
      res.status(404).send({ msg: "Date is not available" });
    }
  } catch (error) {
    next(error);
  }
};

exports.getAppointmentsByUsername = async (req, res, next) => {
  const { username } = req.params;

  try {
    const appointments = await Appointments.find({
      username: { $eq: username },
    }).sort({ date: 1 });

    if (appointments.length > 0) {
      res.status(200).send({ appointments });
    } else {
      res
        .status(404)
        .send({ msg: `No available appointments for ${username}` });
    }
  } catch (error) {
    next(error);
  }
};

// exports.patchAppointment = async (req, res, next) => {
//   const { appointment_id } = req.params;
//   const { username } = req.body;

//   try {
//     const appointment = await Appointments.updateOne(
//       { _id: appointment_id },
//       { $set: { username: username } }
//     );
//     if (appointment.modifiedCount === 1) {
//       res.status(201).send({ appointment });
//     } else {
//       res.status(404).send({ msg: "unable to book appointment" });
//     }
//   } catch (error) {
//     next(error);
//   }
// };

exports.patchAppointment = async (req, res, next) => {
  const { appointment_id } = req.params;
  try {
    const appointment = await Appointments.findByIdAndUpdate(
      { _id: appointment_id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (appointment) {
      res.status(201).send({ appointment });
    } else {
      res.status(404).send({ msg: "unable to book appointment" });
    }
  } catch (error) {
    next(error);
  }
};
