const Users = require("../models/users.js");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await Users.find();
    res.status(200).send({ users });
  } catch (error) {
    next(error);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    // check that the user dosen't exist
    const user = await Users.create(req.body);
    res.status(201).send({ user });
  } catch (error) {
    next(error);
  }
};

exports.validateUser = async (req, res, next) => {
  try {
    const { username } = req.params;
    const { password } = req.body;
    const user = await Users.findOne({
      username: username,
      password: password,
    });
    if (user) {
      res.status(200).send({ user });
    } else {
      res.status(404).send({ msg: "incorrect username or password" });
    }
  } catch (error) {
    next(error);
  }
};
