import axios from "axios";

export const bookingApi = axios.create({
  // baseURL: "https://javascriptmas.cyclic.app/api", //change local host to ip address
  baseURL: "http://localhost:3000/api",
});

export const validateUser = (username, body) => {
  return bookingApi
    .post(`/users/${username}`, { password: body })
    .then((res) => {
      return res.data;
    });
};

export const getAllAppointments = () => {
  return bookingApi.get("/appointments").then((res) => {
    return res.data.appointments;
  });
};

export const getTimeSlotsByDate = (date) => {
  return bookingApi.get(`/appointments/${date}`).then((res) => {
    return res.data.appointments;
  });
};

export const getAppointmentByUsername = (username) => {
  return bookingApi.get(`/appointments/booked/${username}`).then((res) => {
    return res.data.appointments;
  });
};

export const postUserDetails = (body) => {
  return bookingApi.post(`/users`, body).then((res) => {
    return res.data.user;
  });
};

export const postAppointment = async (appointemntId, body) => {
  try {
    const response = await bookingApi.patch(
      `/appointments/${appointemntId}`,
      body
    );

    return response.data.appointment;
  } catch (err) {
    console.log(err);
  }
};
