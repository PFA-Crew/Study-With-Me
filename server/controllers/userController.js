const bcrypt = require('bcryptjs');
const { Users } = require('../models/userModel');

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const createdUser = await Users.create({
      username,
      password,
      duckColor,
    });
    console.log(createdUser);
    res.locals = createdUser;
    return next();
  } catch (error) {
    // Handle error
    return next({
      log: 'Error in userController.createUser' + err,
      message: {
        err: 'An error occured, check server logs',
      },
    });
  }
};

userController.verifyUser = async (req, res, next) => {
  try {
    // Deconstruct data from request body
    const { username, password } = req.body;
    const dbCheck = await Users.findOne({ username });
    if (!dbCheck) {
      return next({
        log: 'bad username',
        status: 400,
        message: { err: 'wrong login credentials' },
      });
    }
    const { duckColor, notes } = dbCheck;
    const pwCheck = await bcrypt.compare(password, dbCheck.password);
    console.log(username);
    if (pwCheck) {
      console.log('logged in');
      res.locals.user = { username, notes, duckColor };
      return next();
    }
    return next({
      log: 'bad password',
      status: 400,
      message: { err: 'wrong login credentials' },
    });
  } catch (error) {
    // Handle error
    return next({
      log: 'Error in userController.verifyUser' + err,
      message: {
        err: 'An error occured, check server logs',
      },
    });
  }
};

module.exports = userController;
