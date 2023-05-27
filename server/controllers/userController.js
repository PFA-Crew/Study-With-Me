const bcrypt = require('bcryptjs');
const { Users } = require('../models/userModel');

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const createdUser = await Users.create({ username, password });
    console.log(createdUser);
    res.locals.userID = createdUser;
    return next();
  } catch (error) {
    // Handle error
    return next(error);
  }
};

userController.verifyUser = async (req, res, next) => {
  try {
    // Deconstruct data from request body
    const { username, password, duckColor } = req.body;
    const dbCheck = await Users.findOne({ username });
    const pwCheck = await bcrypt.compare(password, dbCheck.password);
    console.log(username);
    if (dbCheck && pwCheck) {
      console.log('logged in');
      res.locals.user = { duckColor };
      return next();
    }
    return next({ log: 'bad password', message: 'wrong login credentials' });
  } catch (error) {
    // Handle error
    return next(error);
  }
};

module.exports = userController;
